const test = async () => {
  const headersList = {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)';
  };

  const response = await fetch("https://localhost:3001/search?name=Wlisses&age=31", {
    method: 'GET',
    headers: headersList,
  });

  const data = await response.text();
  console.log(data);
};

test();