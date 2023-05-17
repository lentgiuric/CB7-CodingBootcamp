let arr = [6, 18, 24, 53, 50, 66, 12, 34, 93, 76, 82];

console.log(arr);

let pluto = arr.filter(
    (elem) => {
      return elem > 50;
    }
)

console.log(pluto);

if (pluto.includes(82)){
    pluto.push("hello")
}

console.log(pluto);