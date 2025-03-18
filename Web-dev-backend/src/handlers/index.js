export default function addRouteHandlers(app) {
    app.get("/", (request, reply) => {
        res.send("Hello World!");
    });
    app.post("/signup", async (request, reply) => {
        const { email, username, password } = request.body;
        const user = new User({email,username,password: getHashFromClearText(password),
            await user.save();
            return user.toJSON();
        });
    });
}