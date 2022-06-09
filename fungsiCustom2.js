// TODO: import module bila dibutuhkan di sini
const fs = require("fs")
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback)=>{
  const messageArray= []
  fs.readFile(file1, 
    {
      encoding: 'utf8',
    },
    (err, isi1)=>{
      const data1= JSON.parse(isi1)
      messageArray.push(getSecondWorld(data1.message))
      fs.readFile(file2, 
        {
          encoding:'utf-8'
        },
        (err, isi2)=>{
          const data2 = JSON.parse(isi2)
          messageArray.push(getSecondWorld(data2.message))
          fs.readFile(file3, 
            {
              encoding: 'utf-8'
            },
            (err, isi3)=>{
              const data3 = JSON.parse(isi3)
              messageArray.push(getSecondWorld(data3.message))

              fnCallback(err, messageArray)

            }
            )
        }
        )
    }
    )
};

const getSecondWorld = (sentence)=>{
  const sentenceArray = sentence.split(" ")
  return sentenceArray[0]
}


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
