export const bind = (app: any) => {
    app.get('/api/', (req: any, res: any) => {
        res.json("Welcome to the IUTRS Students API 👋")
    })
}
