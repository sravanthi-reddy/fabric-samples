# Logistics - Create Quote Blockchain Solution

This is a simple implementation of a Logistics - Create Quote Blockchain Solution using Hyperledger Firefly and chaincode-javascript.


## Table of Contents

- [Purpose](#purpose)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Purpose

The purpose of this project is to demonstrate how to create a basic Logistics - Create Quote Blockchain Solution Chaincode and interact with it using swagger UI. This chaincode allows customers to create a quote request and receive the best quote available based on existing data of previously fulfilled quotes.

- [Github Repo](https://github.com/sravanthi-reddy/fabric-samples/tree/main)
## Prerequisites

### For Users

To use this asset-transfer chaincode, you will need:

- A compatible web3-enabled browser such as Google Chrome.


### For Developers

To understand and modify the code of this asset-transfer chaincode, you will need:

- A basic understanding of javascript language and Chaincodes.
- Knowledge of Hyperledger fabric-samples and Hyperledger firefly.
- VMware and Ubuntu v.18 installed on your machine.
- Firefly, vscode, curl, docker, golang, peer and fabric-samples installed on your Ubuntu machine.
- Git installed on your machine to clone and contribute to the repository.

### Setting up the Environment

Once you have installed the prerequisites, follow these steps to set up the development environment:

1. Clone this repository to your local machine using `git clone  https://github.com/sravanthi-reddy/fabric-samples/tree/main`.
2. Navigate to the project directory using `cd asset-transfer-basic/chaincode-javascript-qc/`.
3. Initialize Firefly fabric by running `ff init fabric <stack_name> <number of organizations>`.
4. Start firefly stack by running `ff start <stack_name>`.
5. Once the Firefly is started successfully, you will see the Firefly Explorer and Firefly Sandbox Links.
6. Package the chaincode folder by running `peer lifecycle chaincode package <zip_file_name in this format: quote_control_1.tar.gz>  --path . --lang node --label <any chaincode_name>`.
7. Deploy the code by running `ff deploy fabric <stack_name> <zip_file_name>  firefly <chaincode_name> <version>`.
8. Post deploying, run the curl commands for creating interface.
9. Once the interface is created, get the id generated from there and run curl command for creating api.
10. Will get the Swagger UI path post successful creation of api.

Now, you are good to test the end-points in swagger UI or in postman.

## Deisgn 
#### Major things to consider while designing Logistics - Create Quote Blockchain Solution
##### Access control: 
The Logistics - Create Quote Blockchain Solution contract should have clear rules about who can access the data.

## Usage

To use this project, follow these steps:

- Start Firefly stack by running `ff start <stack_name>`.
- Deploy the package on-chain.
- Create the interface and api end-points with curl commands.
- Swagger UI will help in testing end points.
- To check the logs of the run, use docker commands by running `docker ps --latest`.
- Pick the Container ID and run `docker logs <container_id>`.
- This will help in debugging in case of any issues.
- Alternately, you can find the logs in Firefly Explorer that is generated when ff start <stack_name> ran.
For example: Web UI for member '0': http://127.0.0.1:5000/ui
             Sandbox UI for member '0': http://127.0.0.1:5108

## Functionality

The Logistics - Create Quote Blockchain Solution Chaincode allows the following functionality:

- Exporter/importer can create the quote request.
- Quote ID will be created only if the exporter/importer has given the correct infromation. If not, they will receive the exception messages.
- Once validated, best Quote will be created based on data in the database.
- Can get list of all the quotes created.
- Can get quote details based on ID.

## Prevention against Security Attacks

#### Private accessibility

Firefly will give the feasibility to add multiple organizations to this chain and give the access on need to know/ need to have basis.


## Future Scope

There is large scope to add additional fucntionality to this chaincode. Few of them are as follows:

- Adding Events on quote request creation.
- Adding events on Quote Creation.
- Adding events on any validation exceptions.
- Emailing functionality for sending emails on these several events.
- Create function for accepting/rejecting the given quote by the exporter/importer.
- Create the functionality for forwarding the accepted quote to booking team to take it forward.

## Contributing

Contributions to the asset-transfer chaincode are welcome! If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your changes.
- Make your changes and commit them to your branch.
- Submit a pull request.

Please make sure to include a detailed description of the changes you have made and any relevant information about the issue you are addressing. We also ask that you follow the code style guidelines and ensure that all tests pass before submitting your changes.

### References

Firefly Github Link: https://github.com/hyperledger/firefly/tree/main

Fabric Samples Github Link: https://github.com/hyperledger/fabric-samples

Kaleido: https://console.kaleido.io/orgs/u0paomjlfc

Firefly Documentation: https://hyperledger.github.io/firefly/

FireFly Discord: https://discord.gg/Fy7MJuqw86