import twillio from "twillio";

const ACCOUNT_SID = "ACdb39b7fae6bb12596a65fa30708519d6";
const AUTH_TOKEN = "84af200088a865afa6ec50e649234751";

const client = twillio(ACCOUNT_SID, AUTH_TOKEN);

const mensaje = "Hola este es un mensaje de prueba";

try {
  const message = await client.messages.create({
    body: mensaje,
    from: "+12345163466",
    to: "+541163123122", // número de prueba (sandbox)
  });
  console.log(message);
} catch (error) {
  console.log(error);
}
