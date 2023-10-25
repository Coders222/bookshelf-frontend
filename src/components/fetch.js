
export default async function request(api, method, params) {
    let fetchinput = {
      method: method,
      // headers: {      }
    };
    if (method === "post") {
      params.authkey = sessionStorage.getItem("authkey");
      fetchinput.body = JSON.stringify(params);
    }
  
    const data = await fetch(`https://openlibrary.org${api}` + params.search, fetchinput)
      .then((res) => {
        if (res){
          return res.json();
        }
  
      })
      .then((res) => {
        console.log(res)
        return res;
      })
    return data;
  }
  
 