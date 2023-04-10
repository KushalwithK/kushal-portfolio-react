import axios from "axios"

const apiUrl = "https://api.kushalshah.dev/"
const localUrl = "http://localhost:8080/"
const baseUrl = `${apiUrl}api/v1`
const projects = "/projects"
const images = "/images/"
const testimonial = "/testimonial"
const contact = "/contact"

const apiSingleton = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

export { baseUrl, projects, images, testimonial, contact, apiSingleton }