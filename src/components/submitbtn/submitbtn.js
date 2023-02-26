export default function getDistance(lat1,lon1,lat2,lon2) {
    const R = 6371; // Dünya'nın yarıçapı (km)
    const dLat = deg2rad(lat2-lat1);  // lat1 ve lat2 arasındaki farkı radyan cinsinden hesapla
    const dLon = deg2rad(lon2-lon1);  // lon1 ve lon2 arasındaki farkı radyan cinsinden hesapla
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c; // iki nokta arasındaki mesafe (km)
    return d;
  }
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  const distance = getDistance(lat, lng, latitude, longitude);
    console.log(distance); // çıktı: 4127.49 (km)

