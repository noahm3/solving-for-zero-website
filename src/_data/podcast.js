const fetch = require('node-fetch');
const xml2js = require('xml2js');

module.exports = async function() {
  // Replace with your actual Spotify RSS feed URL when you have it
  const spotifyRssFeedUrl = 'https://anchor.fm/s/fe0e3860/podcast/rss';
  
  try {
    const response = await fetch(spotifyRssFeedUrl);
    const xmlData = await response.text();
    
    // Parse XML to JSON
    const parser = new xml2js.Parser({ explicitArray: false });
    const result = await parser.parseStringPromise(xmlData);
    
    // Extract channel information
    const channel = result.rss.channel;
    
    // Format episode data
    const episodes = Array.isArray(channel.item) ? channel.item : [channel.item];
    
    return {
      title: channel.title,
      description: channel.description,
      link: channel.link,
      image: channel.image?.url || '',
      episodes: episodes.map(item => ({
        title: item.title,
        description: item.description,
        pubDate: item.pubDate,
        audioUrl: item.enclosure?.url || '',
        duration: item['itunes:duration'] || '',
        episodeNumber: item['itunes:episode'] || '',
        guid: item.guid?._,
        link: item.link
      }))
    };
  } catch (error) {
    console.error('Error fetching podcast RSS feed:', error);
    
    // Return a fallback or sample data structure when the feed is not available
    return {
      title: 'Solving for Zero',
      description: 'A podcast about climate solutions',
      link: '#',
      image: '/assets/images/podcast-cover.jpg',
      episodes: []
    };
  }
};