export default async function request(api, method, params,backend) {
    let fetchinput = !backend? {
      method: method,
      // headers: { 'Content-Type': 'application/json' }
      // headers: {      }
    }:
    {
      method: method,
      headers: { 'Content-Type': 'application/json' }
      // headers: {      }
    };
    if (method === "post") {
      console.log("b")
      ///params.authkey = sessionStorage.getItem("authkey");
      console.log(params)
      fetchinput.body = JSON.stringify(params);
    }

    
    const data = await fetch(`${api}` + params.search, fetchinput)
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
