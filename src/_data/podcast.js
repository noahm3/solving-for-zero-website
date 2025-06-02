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
    
    return {
      title: channel.title,
      description: channel.description,
      link: channel.link,
      image: channel.image?.url || channel['itunes:image']?.$?.href || '',
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