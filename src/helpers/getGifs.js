export const getGifs = async category => {
   const apiKey = 'wE6rqwNZ66oSEY1ADbNhPggoyhz4hfQc';
   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
   )}&limit=10&api_key=${apiKey}`;
   const res = await fetch(url);
   const { data } = await res.json();

   const gifs = data.map(img => {
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url,
      };
   });

   return gifs;
};
