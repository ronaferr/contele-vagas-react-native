const ip = process.env.IP || 'localhost';

export function getPacks() {
  return fetch(`http://${ip}:8081/points/`,{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
  })
    .then((resp) => resp.json())
    .then((json) => {
      return json})
      .catch(() => (alert('Erro ao obter packs')));
};

export function getPackId(id) {
  return fetch(`http://${ip}:8081/points/${id}`,{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
  })
    .then((resp) => resp.json())
    .then((json) => {
      return json})
      .catch(() => (alert('Erro ao obter packs')));
};

export function postPack({ id, latitude, longitude, speed, time }) {
  fetch(`http://${ip}:8081/points/${id}`, {
  method: 'POST',
  body: JSON.stringify([{
    id: `${id}`,
    latitude,
    longitude,
    speed,
    time,
  }]),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
};