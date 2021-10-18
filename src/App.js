import React, {Component} from 'react';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    items: [],
    isLoaded: false,
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
  })

}



render() {

var {isLoaded,items} = this.state;

if(!isLoaded) {
  return <div>loading....</div>
} else {

  return(
    <div className="App">
    <ul>
      {items.map(item => (
          <li key={item.id}>
            Name: {item.name} | Email: {item.email}
          </li>
        ))}
    </ul>
    </div>
    );
  }
}
}
export default App;



// import React, { Component } from 'react';
 
// class App extends Component {
//   constructor(props) {

//   //   useEffect(() => {
//   //   const axiosPosts = async () => {
//   //     const response = await axios('https://api.zebcam.com/api/v1/configuration');
//   //     console.log(response.data);
//   //   };
//   //   axiosPosts();
//   // }, []);
//     super(props);
 
//     this.state = {
//         colors: [
//         {
//           "order": 0,
//           "name": "Yellow",
//           "status": true,
//           "type": "fancy",
//           "id": "7FWrNPudcjGqkovVxOoa"
//         },
//         {
//           "status": true,
//           "order": 1,
//           "type": "fancy",
//           "name": "Pink",
//           "id": "9BPhkLwN5Wufzy1poqo8"
//         },
//         {
//           "name": "Blue",
//           "order": 2,
//           "status": true,
//           "type": "fancy",
//           "id": "V9YlxdFM8Hsnw39y1HZY"
//         },
//         {
//           "status": true,
//           "name": "Red",
//           "type": "fancy",
//           "order": 3,
//           "id": "5ne1W55vSJWrBUokVZwc"
//         },
//         {
//           "type": "fancy",
//           "order": 4,
//           "name": "Green",
//           "status": true,
//           "id": "g7PZMmtJOk2k1yaUlnWT"
//         },
//         {
//           "status": true,
//           "type": "fancy",
//           "order": 5,
//           "name": "Purple",
//           "id": "UtwrHcXNEwau31k2OSWW"
//         },
//         {
//           "type": "fancy",
//           "name": "Orange",
//           "status": true,
//           "order": 6,
//           "id": "sIt8OoezB87lBpeRB7sv"
//         },
//         {
//           "name": "Violet",
//           "order": 7,
//           "type": "fancy",
//           "status": true,
//           "id": "55Jo9sEFWdSveirPN1Wq"
//         },
//         {
//           "order": 8,
//           "name": "Gray",
//           "type": "fancy",
//           "status": true,
//           "id": "yDXN5SGwAzsPDJkkef5s"
//         },
//         {
//           "order": 9,
//           "type": "fancy",
//           "status": true,
//           "name": "Black",
//           "id": "AgnJbTTyPVpbBI0NncMq"
//         },
//         {
//           "status": true,
//           "type": "fancy",
//           "name": "Brown",
//           "order": 10,
//           "id": "rC2bwI0lkFfcQA5tTcAZ"
//         },
//         {
//           "status": true,
//           "order": 11,
//           "type": "fancy",
//           "name": "Champagne",
//           "id": "92cEFBI4SlGCChRoQrl9"
//         },
//         {
//           "type": "fancy",
//           "name": "Cognac",
//           "order": 12,
//           "status": true,
//           "id": "dpcCavgHD2logLf8pqS9"
//         },
//         {
//           "type": "fancy",
//           "order": 13,
//           "status": true,
//           "name": "Chameleon",
//           "id": "144NLuzIvrJNR0cbwrVB"
//         },
//         {
//           "order": 14,
//           "name": "White",
//           "status": true,
//           "type": "fancy",
//           "id": "jflJ2dR5caXKXNIniwmS"
//         },
//         {
//           "order": 0,
//           "type": "white",
//           "status": true,
//           "name": "D",
//           "id": "xPy01HQeOkhotfrDx0YH"
//         },
//         {
//           "name": "E",
//           "type": "white",
//           "status": true,
//           "order": 1,
//           "id": "pZ1ElmL79ijYwvnbB2X1"
//         },
//         {
//           "name": "F",
//           "order": 2,
//           "status": true,
//           "type": "white",
//           "id": "7zKvdsNS4X23VOOVDTzi"
//         },
//         {
//           "type": "white",
//           "status": true,
//           "order": 3,
//           "name": "G",
//           "id": "RxGXUMyGOPcR4e7M3ZEB"
//         },
//         {
//           "type": "white",
//           "order": 4,
//           "name": "H",
//           "status": true,
//           "id": "dTYuUjWlHL3wDiEIJziY"
//         },
//         {
//           "name": "I",
//           "status": true,
//           "order": 5,
//           "type": "white",
//           "id": "0Jn6cuaswAr3Vvj6574J"
//         },
//         {
//           "name": "J",
//           "status": true,
//           "order": 6,
//           "type": "white",
//           "id": "jJpomYyJYca0g3BNgFqo"
//         },
//         {
//           "status": true,
//           "name": "K",
//           "type": "white",
//           "order": 7,
//           "id": "6jkumV4zTgvHDNz3aOHk"
//         },
//         {
//           "status": true,
//           "order": 8,
//           "name": "L",
//           "type": "white",
//           "id": "883PddtQSVCiGq5Q83d8"
//         },
//         {
//           "status": true,
//           "name": "M",
//           "order": 9,
//           "type": "white",
//           "id": "fl1m1ki7yuyokkJWIzHn"
//         },
//         {
//           "status": true,
//           "type": "white",
//           "order": 10,
//           "name": "N",
//           "id": "1bvNi2W1MAorgmUCOhTY"
//         },
//         {
//           "name": "O",
//           "status": true,
//           "order": 11,
//           "type": "white",
//           "id": "XWOjIGIBMvMd1trOixDL"
//         },
//         {
//           "type": "white",
//           "name": "P",
//           "order": 12,
//           "status": true,
//           "id": "rZqg4X46s7Yx2LXZrOeP"
//         },
//         {
//           "status": true,
//           "type": "white",
//           "order": 13,
//           "name": "Q",
//           "id": "J0rpCJ0BfKwbCzn0LJDm"
//         },
//         {
//           "status": true,
//           "type": "white",
//           "name": "R",
//           "order": 14,
//           "id": "J6x1cebhtnqIcrswvOsJ"
//         },
//         {
//           "status": true,
//           "type": "white",
//           "name": "S",
//           "order": 15,
//           "id": "Ox4WxioybMftWRPB8w2L"
//         },
//         {
//           "status": true,
//           "type": "white",
//           "order": 16,
//           "name": "T",
//           "id": "YYpELuPM9rHSUfvUrjFt"
//         },
//         {
//           "name": "U",
//           "status": true,
//           "type": "white",
//           "order": 17,
//           "id": "P1lHIF6D8hGxkDNlege1"
//         },
//         {
//           "status": true,
//           "name": "V",
//           "order": 18,
//           "type": "white",
//           "id": "45EXXguvobhHNLsDaP88"
//         },
//         {
//           "order": 19,
//           "status": true,
//           "type": "white",
//           "name": "W",
//           "id": "5xk1MplZ43KZAMT945X1"
//         },
//         {
//           "type": "white",
//           "name": "X",
//           "order": 20,
//           "status": true,
//           "id": "drdSnFoHvon3s9FO7LLR"
//         },
//         {
//           "name": "Y",
//           "type": "white",
//           "status": true,
//           "order": 21,
//           "id": "R0ee419TVBwUVzULKNbB"
//         },
//         {
//           "type": "white",
//           "status": true,
//           "name": "Z",
//           "order": 22,
//           "id": "LCBpJV7eVWDCc3ggnDq2"
//         }
//       ],
//       "intensity": [
//         {
//           "order": 0,
//           "name": "Faint",
//           "status": true,
//           "id": "gOPn10BI9MhjmOiWiu53"
//         },
//         {
//           "order": 0,
//           "name": "Faint",
//           "status": true,
//           "id": "qdvG3GKJ9bzU9sDuCUUQ"
//         },
//         {
//           "name": "Very Light",
//           "status": true,
//           "order": 1,
//           "id": "uCASZISrD6iubI3gBQjh"
//         },
//         {
//           "order": 1,
//           "status": true,
//           "name": "Very Light",
//           "id": "ye1JpNtMwfjxdwWP9s10"
//         },
//         {
//           "name": "Light",
//           "status": true,
//           "order": 2,
//           "id": "Kzt7UsEuNbvnnZgLNweV"
//         },
//         {
//           "name": "Fancy Light",
//           "order": 3,
//           "status": true,
//           "id": "bKDRW010XmWWKDeYY1qC"
//         },
//         {
//           "order": 4,
//           "status": true,
//           "name": "Fancy",
//           "id": "87bfYziSiquJMR4aFsMY"
//         },
//         {
//           "status": true,
//           "order": 5,
//           "name": "Fancy Dark",
//           "id": "TZR9XwVZA5foraZoAPgG"
//         },
//         {
//           "status": true,
//           "name": "Fancy Intense",
//           "order": 6,
//           "id": "ryOuQ8p4YgzhzcQFHYb5"
//         },
//         {
//           "name": "Fancy Vivid",
//           "order": 7,
//           "status": true,
//           "id": "StmdMbbHpU5UArEhuCYP"
//         },
//         {
//           "order": 8,
//           "name": "Fancy Deep",
//           "status": true,
//           "id": "Y36M2c8wlxlxe9Fcy4wk"
//         }
//       ],
//       "shapes": [
//         {
//           "status": true,
//           "order": 0,
//           "icon": "zeb_round.svg",
//           "name": "Round",
//           "id": "aQiYNxoX4vXa653tghAB"
//         },
//         {
//           "status": true,
//           "order": 1,
//           "name": "Pear",
//           "icon": "zeb_pear.svg",
//           "id": "QFrEsyPz5hbwyfDeu6wZ"
//         },
//         {
//           "order": 2,
//           "status": true,
//           "name": "Princess",
//           "icon": "zeb_princess.svg",
//           "id": "pXTRC4IUHQ5TbRO9ePBJ"
//         },
//         {
//           "order": 3,
//           "name": "Marquise",
//           "icon": "zeb_marquise.svg",
//           "status": true,
//           "id": "mmOHB45aZtu5n3GDlfgL"
//         },
//         {
//           "icon": "zeb_sqemerald.svg",
//           "order": 4,
//           "status": true,
//           "name": "Sq.Emerald",
//           "id": "g9NEk8PX6AdIsouA3L1U"
//         },
//         {
//           "status": true,
//           "name": "Oval",
//           "order": 5,
//           "icon": "zeb_oval.svg",
//           "id": "Y3KouW9cES1LGepQbOpm"
//         },
//         {
//           "status": true,
//           "name": "Radiant",
//           "order": 6,
//           "icon": "zeb_radiant.svg",
//           "id": "SQOqP8iW43Nnu4eOioR6"
//         },
//         {
//           "status": true,
//           "order": 7,
//           "icon": "zeb_emerald.svg",
//           "name": "Emerald",
//           "id": "cy7cTeXaCuaaXBnU0j1s"
//         },
//         {
//           "status": true,
//           "order": 8,
//           "name": "Trilliant",
//           "icon": "zeb_trilliant.svg",
//           "id": "fUaJh7h98FgxZsXGrwd9"
//         },
//         {
//           "order": 9,
//           "status": true,
//           "name": "Heart",
//           "icon": "zeb_heart.svg",
//           "id": "RgrfHnQqjSLUFWjrd4Jq"
//         },
//         {
//           "name": "European Cut",
//           "order": 10,
//           "icon": "zeb_european_cut.svg",
//           "status": true,
//           "id": "c1RrhkcDNWvf3lQdh2yw"
//         },
//         {
//           "order": 11,
//           "icon": "zeb_old_miner.svg",
//           "name": "Old Miner",
//           "status": true,
//           "id": "17QJJ3CmdCR9oqbUq4z5"
//         },
//         {
//           "icon": "zeb_flanders.svg",
//           "status": true,
//           "order": 12,
//           "name": "Flanders",
//           "id": "tb0TiQG4JGXXN8SwIdoD"
//         },
//         {
//           "icon": "zeb_cushion_brilliant.svg",
//           "status": true,
//           "order": 13,
//           "name": "Cushion Brilliant",
//           "id": "6uqddzSmx8HXFJsQlDUr"
//         },
//         {
//           "status": true,
//           "order": 14,
//           "icon": "zeb_cushion_modified.svg",
//           "name": "Cushion Modified",
//           "id": "CK4QZTpOBkwwYFS15nWe"
//         },
//         {
//           "status": true,
//           "name": "Asscher",
//           "order": 15,
//           "icon": "zeb_asscher.svg",
//           "id": "4adHaQlEJYwvdG68chlf"
//         },
//         {
//           "name": "Baguette",
//           "icon": "zeb_baguette.svg",
//           "status": true,
//           "order": 16,
//           "id": "RczWPePYAmNUMFeThSGs"
//         },
//         {
//           "name": "Kite",
//           "status": true,
//           "order": 17,
//           "icon": "zeb_kite.svg",
//           "id": "MQhiTHK9i9j0XHwznTlJ"
//         },
//         {
//           "name": "Star",
//           "icon": "zeb_star.svg",
//           "order": 18,
//           "status": true,
//           "id": "9O7EUQ15GPlxSlJI79zq"
//         },
//         {
//           "order": 19,
//           "icon": "zeb_half_moon.svg",
//           "status": true,
//           "name": "Half Moon",
//           "id": "5iA6q5qMU0B28IVFl2cd"
//         },
//         {
//           "name": "Trapezoid",
//           "order": 20,
//           "icon": "zeb_trapezoid.svg",
//           "status": true,
//           "id": "tF26APXVrdFnNuStzJSE"
//         },
//         {
//           "status": true,
//           "order": 21,
//           "name": "Bullets",
//           "icon": "zeb_bullets.svg",
//           "id": "SQhhyr3b6qvZge1IHmQM"
//         },
//         {
//           "name": "Hexgonal",
//           "status": true,
//           "order": 22,
//           "icon": "zeb_hexgonal.svg",
//           "id": "jU8XhxYZBNsdngRnHpt2"
//         },
//         {
//           "icon": "zeb_lozenge.svg",
//           "order": 23,
//           "name": "Lozenge",
//           "status": true,
//           "id": "HYVGgCvfqP9FzdglH3cz"
//         },
//         {
//           "order": 24,
//           "status": true,
//           "name": "Pentagonal",
//           "icon": "zeb_pentagonal.svg",
//           "id": "LkG1uvRAZ8vAGt3UaX8a"
//         },
//         {
//           "order": 25,
//           "status": true,
//           "name": "Rose",
//           "icon": "zeb_rose.svg",
//           "id": "kqq7CUQF099RIzxfuVct"
//         },
//         {
//           "name": "Shield",
//           "order": 26,
//           "icon": "zeb_shield.svg",
//           "status": true,
//           "id": "zYSeCESWAk1y8A7vhvb0"
//         },
//         {
//           "status": true,
//           "order": 27,
//           "name": "Square",
//           "icon": "zeb_square.svg",
//           "id": "0JiDRH1eqK7Xq8AZoyGW"
//         },
//         {
//           "name": "Triangular",
//           "status": true,
//           "order": 28,
//           "icon": "zeb_triangular.svg",
//           "id": "qVR3FrBsyt9IrfXlAVlH"
//         },
//         {
//           "name": "Briolette",
//           "icon": "zeb_briolette.svg",
//           "status": true,
//           "order": 29,
//           "id": "llleux84HKcZ6plVfuRX"
//         },
//         {
//           "name": "Octagonal",
//           "status": true,
//           "icon": "zeb_octagonal.svg",
//           "order": 30,
//           "id": "1mcL8GmFLgL8DhDkgqP7"
//         },
//         {
//           "name": "Tapered Baguette",
//           "icon": "zeb_tapered_baguette.svg",
//           "order": 31,
//           "status": true,
//           "id": "FmGQde8LMhwFdBbldX0D"
//         },
//         {
//           "name": "Square Radiant",
//           "order": 32,
//           "icon": "zeb_square_radiant.svg",
//           "status": true,
//           "id": "lhkyI8kfRPVXZwd9X8hf"
//         },
//         {
//           "order": 33,
//           "status": true,
//           "icon": "zeb_calf.svg",
//           "name": "Calf",
//           "id": "fIMDOaaO3rAtzuBFgJrH"
//         },
//         {
//           "icon": "zeb_trapered_bullet.svg",
//           "name": "Trapered Bullet",
//           "status": true,
//           "order": 34,
//           "id": "ThlZeRissNVRXkJBQGDI"
//         }
//       ],
//       "cut": [
//         {
//           "name": "I",
//           "order": 0,
//           "status": true,
//           "id": "fn5SLbDEe8LXSkXuxHgA"
//         },
//         {
//           "name": "EX",
//           "status": true,
//           "order": 1,
//           "id": "7KFhvHpfFj4x7xNsFfHN"
//         },
//         {
//           "order": 2,
//           "name": "VG",
//           "status": true,
//           "id": "5zSJ14xg6bRnOTe2D4za"
//         },
//         {
//           "status": true,
//           "order": 3,
//           "name": "G",
//           "id": "YwZokEss4rJ4r6G4QaoW"
//         },
//         {
//           "status": true,
//           "order": 4,
//           "name": "F",
//           "id": "qV00ViwTnybwIoHOkqQZ"
//         },
//         {
//           "name": "P",
//           "order": 5,
//           "status": true,
//           "id": "4nynOiTAdZBkfmBM66hr"
//         }
//       ],
//       "fluorescence": [
//         {
//           "name": "None",
//           "status": true,
//           "order": 0,
//           "id": "8E8DdWOC0wujvF8UykEN"
//         },
//         {
//           "status": true,
//           "order": 1,
//           "name": "Very Slight",
//           "id": "pwS7CufHrFiyhsf9hvPc"
//         },
//         {
//           "name": "Faint/Slight",
//           "order": 2,
//           "status": true,
//           "id": "HkCpxAQmPSCJ2liwJwaG"
//         },
//         {
//           "status": true,
//           "name": "Medium",
//           "order": 3,
//           "id": "pgHm252LNZChMormoT8d"
//         },
//         {
//           "status": true,
//           "order": 4,
//           "name": "Strong",
//           "id": "q6YBUXKooXUdt76U8g60"
//         },
//         {
//           "name": "Very Strong",
//           "order": 5,
//           "status": true,
//           "id": "9dCJPzBHUiTnJ1goxINT"
//         }
//       ],
//       "labs": [
//         {
//           "order": 0,
//           "name": "NON",
//           "status": true,
//           "id": "DurKQN1vfx5AV6azsQmw"
//         },
//         {
//           "status": true,
//           "order": 1,
//           "name": "GIA",
//           "id": "sT0VOJSwF5wIl5gYWUoQ"
//         },
//         {
//           "order": 2,
//           "name": "IGI",
//           "status": true,
//           "id": "7keJF8jtcFEaUXNqjDLM"
//         },
//         {
//           "status": true,
//           "name": "HRD",
//           "order": 3,
//           "id": "6tQAjb2yBEzwecGs0OmF"
//         },
//         {
//           "status": true,
//           "order": 4,
//           "name": "AGS",
//           "id": "m8le9YqF9Lsru7Zesfe4"
//         },
//         {
//           "status": true,
//           "name": "RDC",
//           "order": 5,
//           "id": "2skFQw9FGmdPqQDLkDXE"
//         },
//         {
//           "order": 6,
//           "status": true,
//           "name": "CGL",
//           "id": "xZC8k8b00f49o7k3FkX0"
//         },
//         {
//           "name": "DCLA",
//           "order": 7,
//           "status": true,
//           "id": "mtyXEP4VUnFYj79buI87"
//         },
//         {
//           "status": true,
//           "name": "GHI",
//           "order": 8,
//           "id": "GFu3GGcu4kBfRajDKTsb"
//         },
//         {
//           "order": 9,
//           "status": true,
//           "name": "DBGIS",
//           "id": "oGLA2bwpTt26WyphdSh3"
//         },
//         {
//           "status": true,
//           "name": "GSI",
//           "order": 10,
//           "id": "zCSjvb0UtQZjeGRXAeBQ"
//         },
//         {
//           "name": "GWLAB",
//           "status": true,
//           "order": 11,
//           "id": "nUtU73CHajH1YypVbejt"
//         },
//         {
//           "status": true,
//           "name": "NGTC",
//           "order": 12,
//           "id": "N7Pegye5UVKqLEqd7OzS"
//         },
//         {
//           "order": 13,
//           "status": true,
//           "name": "PGS",
//           "id": "rPO1dvOKcSdfTuZYk2Oq"
//         }
//       ],
//       "overtone": [
//         {
//           "name": "None",
//           "status": true,
//           "order": 0,
//           "id": "e9FV5yykN4uUgGfkzCrv"
//         },
//         {
//           "status": true,
//           "order": 1,
//           "name": "Yellow",
//           "id": "JDTF9LgBxb51HSBLzQ86"
//         },
//         {
//           "status": true,
//           "order": 2,
//           "name": "Yellowish",
//           "id": "qA4YIlObrljqqyNBuU80"
//         },
//         {
//           "order": 3,
//           "name": "Pink",
//           "status": true,
//           "id": "YpqB7EH6h9f5Pcjw8LiI"
//         },
//         {
//           "order": 4,
//           "name": "Pinkish",
//           "status": true,
//           "id": "RMg2jXd7LdUvJPx1XufW"
//         },
//         {
//           "status": true,
//           "order": 5,
//           "name": "Blue",
//           "id": "ulU6FJLf4uxHH0YoLVYg"
//         },
//         {
//           "order": 6,
//           "status": true,
//           "name": "Bluish",
//           "id": "ilFTg3UvvPcjKZtOH0Ug"
//         },
//         {
//           "status": true,
//           "order": 7,
//           "name": "Red",
//           "id": "BY96IX8L4oxifbrmKEtj"
//         },
//         {
//           "status": true,
//           "name": "Reddish",
//           "order": 8,
//           "id": "zbFwGN5OQdNcM7Iote6D"
//         },
//         {
//           "order": 9,
//           "name": "Green",
//           "status": true,
//           "id": "d5WLjTFa8U5t6pM2TBpe"
//         },
//         {
//           "order": 10,
//           "status": true,
//           "name": "Greenish",
//           "id": "rmtafAda8osTnxxNWkjx"
//         },
//         {
//           "name": "Purple",
//           "status": true,
//           "order": 11,
//           "id": "Ek1EOb2oSI49iOVVIhqa"
//         },
//         {
//           "name": "Purplish",
//           "status": true,
//           "order": 12,
//           "id": "X76KrCrkLtub7xja6YUY"
//         },
//         {
//           "order": 13,
//           "status": true,
//           "name": "Orange",
//           "id": "fCraBo77enAx9FnhBsis"
//         },
//         {
//           "status": true,
//           "name": "Orangey",
//           "order": 14,
//           "id": "mqxzhyx7IpZKiMUVx1in"
//         },
//         {
//           "status": true,
//           "order": 15,
//           "name": "Violet",
//           "id": "PTkg1Mvqdhje5V1uOLGn"
//         },
//         {
//           "status": true,
//           "order": 16,
//           "name": "Gray",
//           "id": "4jsgid8gxJTUiRLe7fo7"
//         },
//         {
//           "order": 17,
//           "name": "Grayish",
//           "status": true,
//           "id": "Vyy9r90L261sWQRSSyvP"
//         },
//         {
//           "order": 18,
//           "name": "Black",
//           "status": true,
//           "id": "WNSvewUhX2EHAeJxsvDL"
//         },
//         {
//           "name": "Brown",
//           "order": 19,
//           "status": true,
//           "id": "JSdYg06xiW8cZuYlmES6"
//         },
//         {
//           "order": 20,
//           "status": true,
//           "name": "Brownish",
//           "id": "4zoSujXYDiP9fdwr2ZTS"
//         },
//         {
//           "name": "Champagne",
//           "order": 21,
//           "status": true,
//           "id": "Nrn2Nf9VSVLoL5YdkMHQ"
//         },
//         {
//           "order": 22,
//           "status": true,
//           "name": "Congnac",
//           "id": "5mt8eGtXyxmWw8TFmzVX"
//         },
//         {
//           "order": 23,
//           "name": "Chameleon",
//           "status": true,
//           "id": "XpUcEiVkfqXShQgDTw7T"
//         },
//         {
//           "name": "Violetish",
//           "status": true,
//           "order": 24,
//           "id": "kt8eLgUghhiSQriFkS7P"
//         },
//         {
//           "order": 25,
//           "status": true,
//           "name": "White",
//           "id": "enZp6xXwzaT2qxUSnh1r"
//         }
//       ],
//       "polish": [
//         {
//           "name": "EX",
//           "order": 0,
//           "status": true,
//           "id": "KagdQSYepU6rM72Pw6UD"
//         },
//         {
//           "order": 1,
//           "status": true,
//           "name": "VG",
//           "id": "Mz9uVc7uQ3Q6Odt7Iqe0"
//         },
//         {
//           "status": true,
//           "name": "G",
//           "order": 2,
//           "id": "Ui6T5jzUkEVnMrDv0uZg"
//         },
//         {
//           "name": "F",
//           "order": 3,
//           "status": true,
//           "id": "YpzKdJBgVa5z45tEscYx"
//         },
//         {
//           "status": true,
//           "name": "P",
//           "order": 4,
//           "id": "mladQMVVKJcM0aoTyjnr"
//         },
//         {
//           "status": true,
//           "order": 5,
//           "name": "NON",
//           "id": "0RzJkiNIgJA5XhHWZJ4R"
//         }
//       ],
//       "symmetry": [
//         {
//           "name": "EX",
//           "status": true,
//           "order": 0,
//           "id": "pr9YHwTy0KdZt09ymP9a"
//         },
//         {
//           "order": 1,
//           "name": "VG",
//           "status": true,
//           "id": "YQmedie271jXbtlSGQcd"
//         },
//         {
//           "status": true,
//           "order": 2,
//           "name": "G",
//           "id": "H5ifZq3nqSMLzevQCob2"
//         },
//         {
//           "order": 3,
//           "status": true,
//           "name": "F",
//           "id": "KwH6yKBa1DFYIpzLkHq0"
//         },
//         {
//           "order": 4,
//           "status": true,
//           "name": "P",
//           "id": "itAUjCfR5lqnoXLyBNC4"
//         },
//         {
//           "status": true,
//           "name": "NON",
//           "order": 5,
//           "id": "Ena2OBbLc3n5qFc3zwyn"
//         }
//       ],
//       "clarity": [
//         {
//           "name": "FL",
//           "order": 0,
//           "status": true,
//           "id": "nJdQAkDRLHzPouaiABKD"
//         },
//         {
//           "name": "IF",
//           "status": true,
//           "order": 1,
//           "id": "qXfm7wcscSqOjisfLK73"
//         },
//         {
//           "status": true,
//           "name": "VVS1",
//           "order": 2,
//           "id": "eZ739fMz9PrlzWbfJlfz"
//         },
//         {
//           "name": "VVS2",
//           "order": 3,
//           "status": true,
//           "id": "9Diggk1cTCKzvxAVDGRO"
//         },
//         {
//           "order": 4,
//           "name": "VS1",
//           "status": true,
//           "id": "Gn8O6olRy001whbKk2y2"
//         },
//         {
//           "name": "VS2",
//           "order": 5,
//           "status": true,
//           "id": "UhLTOI4kj2YJWU9oqzDt"
//         },
//         {
//           "order": 6,
//           "name": "SI1",
//           "status": true,
//           "id": "kbf9GHqBfuSL6NxGw6Pp"
//         },
//         {
//           "order": 7,
//           "status": true,
//           "name": "SI2",
//           "id": "HTOXtfplyXylks71UFfG"
//         },
//         {
//           "name": "SI3",
//           "order": 8,
//           "status": true,
//           "id": "TgwbGNs9199AwdRn35FH"
//         },
//         {
//           "order": 9,
//           "name": "I1",
//           "status": true,
//           "id": "wFSmvDE00SVULxoKHzuR"
//         },
//         {
//           "status": true,
//           "order": 10,
//           "name": "I2",
//           "id": "PAKq6vgSCCCjmfpUyzHH"
//         },
//         {
//           "status": true,
//           "order": 11,
//           "name": "I3",
//           "id": "GW5fPN2jYU921rWffiit"
//         }
//         ]
//       };
//     }
 
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.colors.map((item1) => (
//             <p key={item1.id}>ID: {item1.id} | Name: {item1.name} | Order: {item1.order}</p>
//           ))}
//         </ul>
//         <ul>
//         {this.state.intensity.map((item2) => (
//           <p key={item2.id}> ID:{item2 .id} | Name: {item2.name} | Order: {item2.order}</p>
//         ))}
//         </ul>
//       </div>
//     );
//   }
// }
 
// export default App;