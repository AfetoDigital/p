import React, { useEffect, useState } from 'react';

const LatestYouTubeVideo = () => {
  const [videoId, setVideoId] = useState(null); // Armazena o ID do último vídeo
  const apiKey = 'AIzaSyB47rzsdkKowSCKMd1BEOFYP2Mqps_sXOw'; // Substitua pela sua chave da API do YouTube
  const channelId = 'UCeTbGmxwn3h1DXRsLwiNB-A'; // Substitua pelo ID do canal

  useEffect(() => {
    // Função para buscar o último vídeo do canal
    const fetchLatestVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setVideoId(data.items[0].id.videoId); // Define o ID do último vídeo
        }
      } catch (error) {
        console.error('Erro ao buscar o último vídeo:', error);
      }
    };

    fetchLatestVideo();
  }, [apiKey, channelId]); // Executa a busca apenas quando a API Key ou o Channel ID mudam

  return (
    <div style={{width: "100%", height: "100%"}}>
      {videoId ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Último Vídeo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Carregando o último vídeo...</p>
      )}
    </div>
  );
};

export default LatestYouTubeVideo;
