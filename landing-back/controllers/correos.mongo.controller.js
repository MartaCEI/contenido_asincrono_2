import { connectDB } from "../data/mongoBD.js";
import { User, Email } from "../data/mongoBD.js";

connectDB();

export const getEmails = async (req, res, next) => {
    res.send("hola")
    
}

export const getEmailById = async (req, res, next) => {
    res.send("hola")
    
}

export const createEmail = async (req, res, next) => {
    res.send("hola")
    
}

export const deleteEmail = async (req, res, next) => {
    res.send("hola")
    
}

export const updateEmail = async (req, res, next) => {
    res.send("hola")
    
}
