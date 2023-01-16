import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      // console.log(url);
      // console.log(options);
      json = await response.json();

      // console.log(json);
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      console.log(err.message);
      setError(err.message);
    } finally {
      // console.log(json);
      // console.log(json.length);
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
