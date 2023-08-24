let testPasados = 0;
let testTotales = 4;

// const suma = (...nums) => {
//   if (nums.length === 0) return 0;
//   let validInput = true;
//   for (let i = 0; i < nums.length; i++) {
//     if (typeof nums[i] !== "number") {
//       validInput = false;
//     }
//   }
//   if (!validInput) return null;
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     result += nums[i];
//   }
//   return result;
// };

const suma = (...nums) => {
  if (nums.length === 0) return 0;
  if (!nums.every((num) => typeof num === "number")) return null;
  return nums.reduce((prev, current) => prev + current);
};

console.log(
  "Test 1. La función suma deberá devolver null si algún parámetro no es numérico"
);
let resultTest1 = suma("3", 4);
if (resultTest1 === null) {
  console.log("Test 1 pasado");
  testPasados++;
} else {
  console.log(
    "Test 1 no ha pasado. Se esperaba que el resultado fuera null, pero se recibió " +
      resultTest1
  );
}

console.log(
  "Test 2. La función suma deberá devolver 0 (cero) si no le pasamos ningún parámetro"
);
let resultTest2 = suma();
if (resultTest2 === 0) {
  console.log("Test 2 pasado");
  testPasados++;
} else {
  console.log(
    "Test 2 no ha pasado. Se esperaba que el resultado fuera 0 (cero), pero se recibió " +
      resultTest2
  );
}

console.log("Test 3. La función suma deberá resolver la suma correctamente");
let resultTest3 = suma(2, 1);
if (resultTest3 === 3) {
  console.log("Test 3 pasado");
  testPasados++;
} else {
  console.log(
    "Test 3 no ha pasado. Se esperaba que el resultado fuera 3, pero se recibió " +
      resultTest3
  );
}

console.log(
  "Test 4. La función suma deberá resolver la suma correctamente con cualquier cantidad de parámetros"
);
let resultTest4 = suma(2, 1, 4, 3);
if (resultTest4 === 10) {
  console.log("Test 4 pasado");
  testPasados++;
} else {
  console.log(
    "Test 4 no ha pasado. Se esperaba que el resultado fuera 10, pero se recibió " +
      resultTest4
  );
}

if (testTotales == testPasados)
  console.log("Todos los test pasaron exitosamente");
else console.log(`Psaron ${testPasados} de un total de ${testTotales} test`);
