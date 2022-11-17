# Lottery

## Getting Started

### Smart Contract

1. Intall packages
   - Change directory to the project path
   - Check the version of used node and use it (`enforce-engine` is enabled).
       - Check JSON file `"engines": { "node": "^14.0.0" }`
       - Or, you can check `.nvmrc` file.
       - You can run **`nvm use`** while you open the project path in the terminal to use the `.nvmrc` file.
   - run the command: **`npm install`**.

2. Configure your environment variables
   - Add your **mnemonic** phrase (12 words).
   - Add your provider URL.
       - You can use 3rd party service like [Infura](https://infura.io) -- after you create new account or login, go to endpoints tab, choose the network and protocol you want to connect.
       - Or, you can setup a local node in your machine to connect the network (this way is panic).
   - You have to get something like that:

	```text
	MNEMONIC="cost spirit party essay insane festival front woman today desk pioneer wolf"
	PROVIDER_URL="https://goerli.infura.io/v3/a5aac9c4375547a8a7a34dc4dc41c279"
	```

3. Test that everything is working by running the command: `npm run test`.
   - All test cases should be passed!
  ![Tests passed](assets/images/screenshot-2022-11-17%2012-13-13.png)

4. Now, you can deploy on a real network!

	```bash
	npm run deploy
	```

   ![Deployed](assets/images/screenshot-2022-11-17%2012-18-10.png)
