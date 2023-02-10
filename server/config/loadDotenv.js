import path from 'path'
import dotenv from "dotenv";
import {fileURLToPath} from 'url'
const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
dotenv.config({path:_dirname + "/config.env"})