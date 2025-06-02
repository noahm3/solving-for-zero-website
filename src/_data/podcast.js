const fetch = require('node-fetch');
const xml2js = require('xml2js');

module.exports = async function() {
  const spotifyRssFeedUrl = 'https://anchor.fm/s/fe0e3860/podcast/rss';
  
  try {
    const response = await fetch(spotifyRssFeedUrl);
    const xmlData = await response.text();
    
    const parser = new xml2js.Parser({ explicitArray: false });
    const result = await parser.parseStringPromise(xmlData);
    
    const channel = result.rss.channel;
    
    // Handle case where there might be no items or single item
    let episodes = [];
    if (channel.item) {
      episodes = Array.isArray(channel.item) ? channel.item : [channel.item];
    }

    // Extract podcast-level image (Spotify/Anchor structure)
    let podcastImage = '';
    if (channel.image?.url) {
      podcastImage = channel.image.url;
    } else if (channel.image?.href) {
      podcastImage = channel.image.href;
    } else if (typeof channel.image === 'string') {
      podcastImage = channel.image;
    }
    
    return {
      title: channel.title,
      description: channel.description,
      link: channel.link,
      image: podcastImage,
      episodes: episodes.map((item, index) => ({
        id: index,
        title: item.title,
        description: item.description,
        pubDate: item.pubDate,
        audioUrl: item.enclosure?.$.url || item.enclosure?.url || '',
        duration: item['itunes:duration'] || '',
        episodeNumber: item['itunes:episode'] || '',
        episodeType: item['itunes:episodeType'] || 'full',
        guid: item.guid?._ || item.guid,
        link: item.link,
        // CORRECTED: Image extraction for Spotify/Anchor
        image: extractEpisodeImage(item, podcastImage),
        formattedDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long', 
          day: 'numeric'
        }) : ''
      }))
    };
  } catch (error) {
    console.error('Error fetching podcast RSS feed:', error);
    
    return {
      title: 'Solving for Zero',
      description: 'A podcast about climate solutions',
      link: '#',
      image: '/assets/images/podcast-cover.jpg',
      episodes: []
    };
  }
};

// Helper function to extract episode images from Spotify/Anchor RSS
function extractEpisodeImage(item, fallbackImage) {
  // Try multiple possible image locations in Spotify/Anchor RSS
  
  // 1. Check for episode-specific image in description (Anchor sometimes embeds images)
  if (item.description && typeof item.description === 'string') {
    const imgMatch = item.description.match(/<img[^>]+src="([^"]+)"/);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
  }
  
  // 2. Check for iTunes image tag (some feeds still use this)
  if (item['itunes:image']?.$ && item['itunes:image'].$.href) {
    return item['itunes:image'].$.href;
  }
  
  // 3. Check for standard RSS image
  if (item.image) {
    if (typeof item.image === 'string') {
      return item.image;
    } else if (item.image.url) {
      return item.image.url;
    } else if (item.image.href) {
      return item.image.href;
    }
  }
  
  // 4. Check for media:content or media:thumbnail (some podcast feeds use this)
  if (item['media:content'] && item['media:content'].$.url) {
    const mediaUrl = item['media:content'].$.url;
    // Only use if it's an image, not audio
    if (mediaUrl.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
      return mediaUrl;
    }
  }
  
  if (item['media:thumbnail'] && item['media:thumbnail'].$.url) {
    return item['media:thumbnail'].$.url;
  }
  
  // 5. Fallback to podcast-level image
  return fallbackImage || '/assets/images/podcast-cover.jpg';
}