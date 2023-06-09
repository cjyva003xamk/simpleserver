"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiRouter_1 = __importDefault(require("./routes/apiRouter"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(express_1.default.static(path_1.default.resolve(__dirname, "public")));
app.use((0, cors_1.default)());
app.use("/api", apiRouter_1.default);
app.use((req, res, next) => {
    if (!res.headersSent) {
        res.status(404).json({ viesti: "Virheellinen url reitti, vastaa vain localhost:3001/api" });
    }
    next();
});
app.listen(port, () => {
    console.log(`Palvelin käynnistyi porttiin : ${port}`);
});
