import { EzBackend, EzModel, Type } from "@ezbackend/common";
import { EzOpenAPI } from "@ezbackend/openapi";
import { EzDbUI } from "@ezbackend/db-ui";
import { EzCors } from "@ezbackend/cors";
// import { EzUser } from "@ezbackend/auth";

const app = new EzBackend();

//---Plugins---
//Everything is an ezapp in ezbackend
app.addApp(new EzOpenAPI());
app.addApp(new EzDbUI());
app.addApp(new EzCors());
//---Plugins---

//Models are also ezapps in ezbackend
const Items = new EzModel("items", {
  shopName: Type.VARCHAR,
  itemName: Type.VARCHAR,
  price: Type.DOUBLE,
  available: Type.BOOL,
});

app.addApp(Items, { prefix: "/items" });

app.start({ address: "0.0.0.0", server: { trustProxy: true } });
