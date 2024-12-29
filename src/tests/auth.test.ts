// import   request from "express";
// import jwt from 'jsonwebtoken';

// const baseURL = '/auth';
// type User = {
//     email: string,
//     password: string,
//     token?: string,
//     id?: string
// }
// const testUser : User = {
//     email : "test@gmail.com",
//     password : "123456"
// }
// describe('Auth', () => {
// test("auth test reg", async ()=>{
// const response = await request(app).post(`${baseURL}/register`).send(testUser)
// expect(response.statusCode).toBe(200);

// test("auth test login", async ()=>{
//     const response = await request(app).post(`${baseURL}/login`).send(testUser)
//     expect(response.statusCode).toBe(200);
//     expect(response.body).toHaveProperty('token')
//     const token = response.body.token
//     testUser.token = token;
// })
// })
// test("Test token access", async ()=>{
//     const response = await request(app).post(`/posts`).send({
//         title: "test",
//         content: "test",
//         owner : "test"
//     })
//     expect(response.statusCode).not.toBe(200)
//     const response2 = await request(app).post(`/posts`).set({
//         authorization: `JWT` +testUser.token
//     }).send({
//         title: "test",
//         content: "test",
//         owner : "test"
//     })
// })
// });