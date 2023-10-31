export default function parseMyntra(data) {
    console.log(data)
    data = JSON.parse(data)
    let len = Object.keys(data).length;
    let res = []
    //for loop of len
    for (let i = 0; i < len; i++) {
        // i to string
        
        let item = data[i.toString()]
      

        // get all the required data from item {url , name , mrp}
        let url = item['url']
        let name = item['name']
        let price = item['mrp']
        
        // get image url from item {media / albums / 0 / images / 0 / src}
        let image = item['media']['albums'][0]['images'][0]['src']

        // add object to res
        res.push({ url, name, price, image })
    }
    console.log(res)
    return res

  
}
