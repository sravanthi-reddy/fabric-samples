/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

const { Contract } = require('fabric-contract-api');
const { v4: uuidv4 } = require('uuid');


class AssetTransfer extends Contract {

    //initializes the ledger with some initial data 
    async InitLedger(ctx) {
        const quotes = [
            {
                cargo_ready_date: "2023-05-22",
                commercial_invoice: "abc",
                container_list: [],
                delivery_date: "2023-05-28",
                destination_city: "Hyderabad",
                drop_off_address: "Vanasthalipuram",
                export_declaration: "string",
                ff_company_name: "DHL",
                ff_contact_number: "+1 298 234 2342",
                ff_contact_person: "dhl_person",
                ff_email: "dhl@gmail.com",
                inco_terms: "N/A",
                is_customs_clearance: true,
                is_importer: true,
                is_loose_cargo: true,
                loose_cargo_list: [
                    {
                    
                    dims: "10x10x10",
                    dims_units: "cm",
                    weight: "250",
                    weight_units: "kg",
                    no_of_units: "33",
                    is_dg: true,
                    dg_info: {
                        sds: "sds_info",
                        UN_no: "UN1234",
                        class_no: "ClassA",
                        HS_no: "HS5678"
                    },
                    is_tc: true,
                    tc_info: "-20",
                    stackable: true
                    }
                ],
                mode_of_transport: "air",
                pickup_address: "35 Finch ave",
                source_city: "North York",
                special_instructions: "Nothing",
            }
            ,
            {
                cargo_ready_date: "2023-05-22",
                commercial_invoice: "abc",
                container_list: [],
                delivery_date: "2023-05-28",
                destination_city: "Hyderabad",
                drop_off_address: "Vanasthalipuram",
                export_declaration: "string",
                ff_company_name: "DHL",
                ff_contact_number: "+1 298 234 2342",
                ff_contact_person: "dhl_person",
                ff_email: "dhl@gmail.com",
                inco_terms: "N/A",
                is_customs_clearance: true,
                is_importer: true,
                is_loose_cargo: true,
                loose_cargo_list: [
                    {
                    
                    dims: "10x10x10",
                    dims_units: "cm",
                    weight: "350",
                    weight_units: "kg",
                    no_of_units: "3",
                    is_dg: true,
                    dg_info: {
                        sds: "sds_info",
                        UN_no: "UN1234",
                        class_no: "ClassA",
                        HS_no: "HS5678"
                    },
                    is_tc: false,
                    tc_info: "",
                    stackable: false
                    }
                ],
                mode_of_transport: "air",
                pickup_address: "35 Finch ave",
                source_city: "North York",
                special_instructions: "Nothing",
            }
            ,{
                cargo_ready_date: "2023-05-28",
                commercial_invoice: "abc",
                container_list: [],
                delivery_date: "2023-06-10",
                destination_city: "London",
                drop_off_address: "Bay street",
                export_declaration: "string",
                ff_company_name: "DHL1",
                ff_contact_number: "+1 298 234 2342",
                ff_contact_person: "dhl1_person",
                ff_email: "dhl1@gmail.com",
                inco_terms: "N/A",
                is_customs_clearance: true,
                is_importer: true,
                is_loose_cargo: true,
                loose_cargo_list: [
                    {
                    
                    dims: "10x10x10",
                    dims_units: "in",
                    weight: "500",
                    weight_units: "lb",
                    no_of_units: "3",
                    is_dg: true,
                    dg_info: {
                        sds: "sds_info",
                        UN_no: "UN1234",
                        class_no: "ClassA",
                        HS_no: "HS5678"
                    },
                    is_tc: true,
                    tc_info: "-10",
                    stackable: true
                    },
                    {
                    
                        dims: "10x10x10",
                        dims_units: "cm",
                        weight: "400",
                        weight_units: "kg",
                        no_of_units: "3",
                        is_dg: false,
                        dg_info: {
                        },
                        is_tc: false,
                        tc_info: "",
                        stackable: false
                        }
                ],
                mode_of_transport: "road",
                pickup_address: "35 Finch ave",
                source_city: "North York",
                special_instructions: "Nothing",
            },
            {
                cargo_ready_date: "2023-05-28",
                commercial_invoice: "abc",
                container_list: [
                    {
                        no_of_units: "7000",
                        container_type: "20",
                        is_dg: false,
                        dg_info: {},
                        is_tc: false,
                        tc_info: "",
                        stackable: false
                      }
                   
                ],
                delivery_date: "2023-06-20",
                destination_city: "Hyderabad",
                drop_off_address: "Vanasthalipuram",
                export_declaration: "string",
                ff_company_name: "DHL",
                ff_contact_number: "+1 298 234 2342",
                ff_contact_person: "dhl_person",
                ff_email: "dhl@gmail.com",
                inco_terms: "N/A",
                is_customs_clearance: true,
                is_importer: true,
                is_loose_cargo: false,
                loose_cargo_list: [],
                mode_of_transport: "ocean",
                pickup_address: "35 Finch ave",
                source_city: "North York",
                special_instructions: "Nothing",
            },
            {
                cargo_ready_date: "2023-05-28",
                commercial_invoice: "abc",
                container_list: [
                    {
                        no_of_units: "700",
                        container_type: "20",
                        is_dg: false,
                        dg_info: {},
                        is_tc: false,
                        tc_info: "",
                        stackable: false
                      },{
                        no_of_units: "5",
                        container_type: "40",
                        is_dg: false,
                        dg_info: {},
                        is_tc: true,
                        tc_info: "tc_ifno",
                        stackable: true

                      }
                   
                ],
                delivery_date: "2023-06-15",
                destination_city: "Hyderabad",
                drop_off_address: "Vanasthalipuram",
                export_declaration: "string",
                ff_company_name: "DHL",
                ff_contact_number: "+1 298 234 2342",
                ff_contact_person: "dhl_person",
                ff_email: "dhl@gmail.com",
                inco_terms: "N/A",
                is_customs_clearance: true,
                is_importer: true,
                is_loose_cargo: false,
                loose_cargo_list: [],
                mode_of_transport: "ocean",
                pickup_address: "35 Finch ave",
                source_city: "North York",
                special_instructions: "Nothing",
                quote_id :  this.generateUniqueId(),
                createdAt: new Date().toISOString(), // Set createdAt to current date and time
                updatedAt: null
            }
        ];

        const transporters  = [
            [
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'road',
                    source: 'North York',
                    destination: 'Toronto-Airport',
                    per_unit_charge: '20',
                    forwarder_email: ''
                },
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'air',
                    source: 'Toronto-Airport',
                    destination: 'Hyderabad-Airport',
                    per_unit_charge: '100',
                    forwarder_email: '',
                },
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'road',
                    source: 'Hyderabad-Airport',
                    destination: 'Hyderabad',
                    per_unit_charge: '20',
                    forwarder_email: '',

                },
            ],
            [
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'road',
                    source: 'North York',
                    destination: 'Toronto-Airport',
                    per_unit_charge: '10',
                    forwarder_email: ''
                },
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'air',
                    source: 'Toronto-Airport',
                    destination: 'Hyderabad-Airport',
                    per_unit_charge: '200',
                    forwarder_email: ''
                },
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'road',
                    source: 'Hyderabad-Airport',
                    destination: 'Hyderabad',
                    per_unit_charge: '50',
                    forwarder_email: ''
                },
            ],
            [
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'road',
                    source: 'Toronto',
                    destination: 'London',
                    per_unit_charge: '50',
                    forwarder_email: '',
                },
            ],
            [
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'road',
                    source: 'Toronto',
                    destination: 'Toronto-port',
                    per_unit_charge: '40',
                    forwarder_email: '',
                },
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'ocean',
                    source: 'Toronto-port',
                    destination: 'Vizag-port',
                    per_unit_charge: '400',
                    forwarder_email: '',
                },
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'road',
                    source: 'Vizag-port',
                    destination: 'Hyderabad',
                    per_unit_charge: '80',
                    forwarder_email: '',
                },
            ],
            [
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'road',
                    source: 'Toronto',
                    destination: 'Toronto-port',
                    per_unit_charge: '70',
                    forwarder_email: '',
                },
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'ocean',
                    source: 'Toronto-port',
                    destination: 'Vizag-port',
                    per_unit_charge: '300',
                    forwarder_email: '',
                },
                {
                    quoteId: '',
                    transporter_id: this.generateUniqueId(),
                    mode: 'road',
                    source: 'Vizag-port',
                    destination: 'Hyderabad',
                    per_unit_charge: '75',
                    forwarder_email: '',
                },

            ]
        ];

        for (let i = 0; i < quotes.length; i++) {
            const quote = quotes[i]
            const trans = transporters[i]

            quote.docType = 'quote';
            const asset = await this.ValidateQuote(quote)
            if(this.isNullOrEmpty(asset)){
                return "validation_error"
            }
            await ctx.stub.putState(asset.quote_id, Buffer.from(JSON.stringify(asset)));

            for (const transporter of trans) {
                transporter.docType = 'transporter';
                transporter.quoteId = quote.quote_id;
                transporter.forwarder_email =  quote.ff_email;
                await ctx.stub.putState(transporter.transporter_id, Buffer.from(JSON.stringify(transporter)));
              }
            }
    }

    //This function is used to take the inputs for Quote Request, validate given details and inititate quote process
    async CreateQuote(ctx,mode_of_transport, is_loose_cargo,loose_cargo_list, containers_list,
         cargo_ready_date, special_instructions, delivery_date,source_city, destination_city, 
         pickup_address, drop_off_address, inco_terms, export_declaration, is_customs_clearance, commercial_invoice,
        is_importer, ff_company_name, ff_email, ff_contact_person, ff_contact_number)
    {
        const quote_input = {
            mode_of_transport, //(air, ocean, ground) 
            is_loose_cargo,  // true , if false then go with containers 
            loose_cargo_list,  //array of loose_cargo objects
            containers_list , //array of containers object           
            cargo_ready_date,
            special_instructions,
            delivery_date, //required
            source_city,
            destination_city,
            pickup_address,
            drop_off_address,
            inco_terms,  //(optoinal, helpful, explanation here (also a competitor))
            export_declaration,  //required
            is_customs_clearance,  //required (if yes, then commercial invoice required)
            commercial_invoice,
            is_importer, // (y/n) - if n then consider as exporter
            ff_company_name, //Freight Forwarder company
            ff_email, //Freight email address
            ff_contact_person, //Freight forwarder contact person name
            ff_contact_number, 
        }; 


        console.log("Create Quote inputs ", quote_input)

        const asset = await this.ValidateQuote(quote_input)
        if(this.isNullOrEmpty(asset)){
            return "validation_error"
        }

        console.log("validated input", asset)
        await ctx.stub.putState(asset.quote_id, Buffer.from(JSON.stringify(asset)));

        var final_quote = {}

        if(asset.is_importer === "true"){


           final_quote = await this.DFF_Initiate_Quote(ctx,asset)
        }else{

            final_quote = await this.OFF_Initiate_Quote(ctx,asset)
        }

        if(!this.isNullOrEmpty(final_quote)){
            asset.final_quote = final_quote;
            await ctx.stub.putState(asset.quote_id, Buffer.from(JSON.stringify(asset)))
            return {"message" : "Successfully generated code for the given input", "input" : JSON.stringify(asset), "final_quote": JSON.stringify(final_quote)}
        }

        return {"message" : "No data available with given freight forwarder email. Escalating to customer service team", "quote_date" : JSON.stringify(asset)}
        
    }

     //2
     async OFF_Transporter_Quote(ctx, prevTrans) {
    
        const minPerUnitChargeItem = prevTrans.reduce((minItem, currentItem) => {
            if (currentItem.per_unit_charge < minItem.per_unit_charge) {
              return currentItem;
            }
            return minItem;
          });
        console.log("min per unit charge item", minPerUnitChargeItem)
        return minPerUnitChargeItem
          
    }

    //2
    async DFF_Transporter_Quote(ctx, prevTrans) {
    
        const minPerUnitChargeItem = prevTrans.reduce((minItem, currentItem) => {
            if (currentItem.per_unit_charge < minItem.per_unit_charge) {
              return currentItem;
            }
            return minItem;
          });
        console.log("min per unit charge item", minPerUnitChargeItem)
        return minPerUnitChargeItem
          
    }

     //11 - covers 9 
    async OFF_Initiate_Quote(ctx,asset) {


        //1. Make decision whether go with carrier based on mode_of_transport

        const is_carrier_required = true;

        var final_quote = {}

        console.log("OFF Initiating quote............")

        const prevTransIds = await this.Define_Transport_Path(ctx,asset.source_city, asset.destination_city, asset.ff_email, asset.mode_of_transport)

        if(this.isNullOrEmpty(prevTransIds) || prevTransIds.length == 0){
            return final_quote;
        }

        if(asset.mode_of_transport == "road"){
            is_carrier_required = false;
        }

        if(is_carrier_required){
            var allRoad1Paths, allAirPaths, allOceanPaths, allRoad2Paths


            allRoad1Paths = prevTransIds.filter((trans) => trans.mode === "road" && trans.source === asset.source_city);

            const road1_info  = await this.OFF_Transporter_Quote(ctx,allRoad1Paths);

            const weight =  this.getWeightFromAsset(asset)


            const origin_freight_charges = {
                source : road1_info.source,
                destination : road1_info.destination,
                per_unit_charge : road1_info.per_unit_charge,
                overall_charge : parseInt(weight) * parseInt(road1_info.per_unit_charge)
            }

            console.log("final road1 quote ", origin_freight_charges)



            var carrier_freight_charges = {}
            var destination_road2 = ""

            if(asset.mode_of_transport == "air"){

                allAirPaths = prevTransIds.filter((trans) => trans.mode === "air" && trans.source === road1_info.destination);
            
                const air_info =  await  this.OFF_Transporter_Quote(ctx, allAirPaths);

    
                carrier_freight_charges = {
                    source : air_info.source,
                    destination : air_info.destination,
                    per_unit_charge : air_info.per_unit_charge,
                    overall_charge : parseInt(weight) * parseInt(air_info.per_unit_charge)
    
                }
                console.log("final air quote ", carrier_freight_charges)
                destination_road2 = air_info.destination

            }

            if(asset.mode_of_transport == "ocean"){

                allOceanPaths = prevTransIds.filter((trans) => trans.mode === "ocean" && trans.source === road1_info.destination);
            

                const ocean_info =  await  this.OFF_Transporter_Quote(ctx, allOceanPaths);

    
                carrier_freight_charges = {
                    source : ocean_info.source,
                    destination : ocean_info.destination,
                    per_unit_charge : ocean_info.per_unit_charge,
                    overall_charge : parseInt(weight) * parseInt(ocean_info.per_unit_charge)
    
                }
                console.log("final ocean quote ", carrier_freight_charges)
                destination_road2 = ocean_info.destination


            }
         
            

            allRoad2Paths = prevTransIds.filter((trans) => trans.mode === "road" && trans.source === destination_road2 && trans.destination === asset.destination_city);


            const road2_info =  await  this.OFF_Transporter_Quote(ctx, allRoad2Paths);


            const destination_freight_charges = {
                source : road2_info.source,
                destination : road2_info.destination,
                per_unit_charge : road2_info.per_unit_charge,
                overall_charge : parseInt(weight) * parseInt(road2_info.per_unit_charge)

            }

            console.log("final road2 quote", destination_freight_charges)

            final_quote = {origin_freight_charges, carrier_freight_charges,destination_freight_charges, origin_source : asset.source_city
            ,destination : asset.destination_city, 
            quote_final_price : origin_freight_charges.overall_charge + carrier_freight_charges.overall_charge + destination_freight_charges.overall_charge };
           
            
        }else{

            var allRoadPaths = prevTransIds.filter((trans) => trans.mode === "road" && trans.source === asset.source_city && trans.destination === asset.destination_city);


            const road_info = await this.OFF_Transporter_Quote(ctx,allRoadPaths);
            const freight_charges = {
                source : road_info.source,
                destination : road_info.destination,
                per_unit_charge : road_info.per_unit_charge,
                quote_final_price : parseInt(weight) * parseInt(road_info.per_unit_charge)
            }
            final_quote = {freight_charges}

       }

       console.log("final quote in exporter sending", final_quote, asset.quote_id)
       await this.Final_Quote_OFF_To_Exporter(ctx, final_quote);

       return final_quote

    }

     //8
     async Final_Quote_OFF_To_Exporter(ctx, final_quote) {
        //console.log("final quote in exporter sending ", final_quote)

        //trigger events upon generation of final_quote
        //send this to exporter - out-of-scope
    }

    //9 - decisions made in OFF initiation 

    //10
    async Final_Quote_DFF_To_Importer(ctx,final_quote) {
        console.log("final quote in importer sending ", final_quote)

    }


    
    //initiates the process for quote generation for importer
    async DFF_Initiate_Quote(ctx,asset) {
        const is_carrier_required = true;

        var final_quote = {}

        console.log("DFF initiation starts---------------------")

        const prevTransIds = await this.Define_Transport_Path(ctx,asset.source_city, asset.destination_city, asset.ff_email, asset.mode_of_transport)

        if(this.isNullOrEmpty(prevTransIds) || prevTransIds.length == 0){
            return final_quote;
        }

        if(asset.mode_of_transport == "road"){
            is_carrier_required = false;
        }


        if(is_carrier_required){

            var allRoad1Paths, allAirPaths, allOceanPaths, allRoad2Paths


            allRoad1Paths = prevTransIds.filter((trans) => trans.mode === "road" && trans.source === asset.source_city);

            const road1_info  = await this.DFF_Transporter_Quote(ctx,allRoad1Paths);
            
            const weight =  this.getWeightFromAsset(asset)


            const origin_freight_charges = {
                source : road1_info.source,
                destination : road1_info.destination,
                per_unit_charge : road1_info.per_unit_charge,
                overall_charge : parseInt(weight) * parseInt(road1_info.per_unit_charge)
            }

            console.log("final road1 quote ", origin_freight_charges)




            var carrier_freight_charges = {}

            var destination_road2 = ""
            if(asset.mode_of_transport == "air"){

                allAirPaths = prevTransIds.filter((trans) => trans.mode === "air" && trans.source === road1_info.destination);
            
                const air_info =  await  this.DFF_Transporter_Quote(ctx, allAirPaths);

    
                carrier_freight_charges = {
                    source : air_info.source,
                    destination : air_info.destination,
                    per_unit_charge : air_info.per_unit_charge,
                    overall_charge : parseInt(weight) * parseInt(air_info.per_unit_charge)
    
                }
                console.log("final carrier air quote ", carrier_freight_charges)
                destination_road2 = air_info.destination

            }

            if(asset.mode_of_transport == "ocean"){

                allOceanPaths = prevTransIds.filter((trans) => trans.mode === "ocean" && trans.source === road1_info.destination);
            

                const ocean_info =  await  this.DFF_Transporter_Quote(ctx, allOceanPaths);

    
                carrier_freight_charges = {
                    source : ocean_info.source,
                    destination : ocean_info.destination,
                    per_unit_charge : ocean_info.per_unit_charge,
                    overall_charge : parseInt(weight) * parseInt(ocean_info.per_unit_charge)
    
                }
                destination_road2 = ocean_info.destination

                console.log("final carrier ocean quote ", carrier_freight_charges)


            }
         

            
            

            allRoad2Paths = prevTransIds.filter((trans) => trans.mode === "road" && trans.source === destination_road2 && trans.destination === asset.destination_city);


            const road2_info =  await  this.DFF_Transporter_Quote(ctx, allRoad2Paths);


            const destination_freight_charges = {
                source : road2_info.source,
                destination : road2_info.destination,
                per_unit_charge : road2_info.per_unit_charge,
                overall_charge : parseInt(weight) * parseInt(road2_info.per_unit_charge)

            }
            console.log("final road2 quote ", destination_freight_charges)


            final_quote = {origin_freight_charges, carrier_freight_charges,destination_freight_charges, origin_source : asset.source_city
            ,destination : asset.destination_city, 
            quote_final_price : origin_freight_charges.overall_charge + carrier_freight_charges.overall_charge + destination_freight_charges.overall_charge };
           
        }else{


            var allRoadPaths = prevTransIds.filter((trans) => trans.mode.trim().toLowerCase() === "road" && trans.source === asset.source_city && trans.destination === asset.destination_city);

            const road_info = await this.DFF_Transporter_Quote(ctx,allRoadPaths);
            const freight_charges = {
                source : road_info.source,
                destination : road_info.destination,
                per_unit_charge : road_info.per_unit_charge,
                overall_charge : parseInt(weight) * parseInt(road_info.per_unit_charge)
            }
            final_quote = {freight_charges}

       }

       console.log("final quote in importer  sending", final_quote, asset.quote_id)

       await this.Final_Quote_DFF_To_Importer(ctx,final_quote);

       return final_quote
    }

    getWeightFromAsset(quote_object){
        if(!this.isNullOrEmpty(quote_object.is_loose_cargo) && quote_object.is_loose_cargo){

            if(!this.isNullOrEmpty(quote_object.loose_cargo_list)){
                console.log("loose cargo list", quote_object.loose_cargo_list,Array.isArray(quote_object.loose_cargo_list));
                var looseCargoList =  quote_object.loose_cargo_list
                if(!Array.isArray(quote_object.loose_cargo_list)){
                    looseCargoList = JSON.parse(quote_object.loose_cargo_list);
                }
                console.log("loose 0", looseCargoList[0])
                return looseCargoList[0].weight

            }         

        }else{
            console.log("validating container list")

            if(!this.isNullOrEmpty(quote_object.containers_list)){
                const containerList = JSON.parse(quote_object.containers_list);
                console.log("container 0", containerList[0])
                return containerList[0].no_of_units 
            }          

        }
    }

    // Generate a unique ID using UUID v4
    generateUniqueId() {
        const uniqueId = uuidv4();
        return uniqueId;
    }

    isNullOrEmpty(value) {
        return value === null || value === undefined || value === '';
    }



    //Validating the variables in quote
    async ValidateQuote(quote_object) {
        const validModes = ['air', 'ocean', 'road'];

        

        //validate quote_object
        console.log("validating quote_object")
        if (this.isNullOrEmpty(quote_object)) {
            throw new Error('quote_object should contain parameters.');
        }

        //validate mode_of_transport
        console.log("validating mode")
        const { mode_of_transport } = quote_object;



        if (this.isNullOrEmpty(mode_of_transport)) {
            throw new Error('mode_of_transport parameter is required.');
        }
        const formattedMode = mode_of_transport.trim().toLowerCase();

        if (!validModes.includes(formattedMode)) {
          throw new Error('Invalid mode_of_transport parameter. Valid options are air, ocean, and road.');
        }
        
        
        //validate cargo type
        
        console.log("validating cargo list")
        if(!this.isNullOrEmpty(quote_object.is_loose_cargo) && quote_object.is_loose_cargo == "true"){

            if(!this.isNullOrEmpty(quote_object.loose_cargo_list)){
                console.log("loose cargo list", quote_object.loose_cargo_list,Array.isArray(quote_object.loose_cargo_list));
                var looseCargoList =  quote_object.loose_cargo_list
                if(!Array.isArray(quote_object.loose_cargo_list)){
                    looseCargoList = JSON.parse(quote_object.loose_cargo_list);
                }

                console.log("loose cargo  sss", looseCargoList)


                //const looseCargoList = JSON.parse(quote_object.loose_cargo_list);

                if(!Array.isArray(looseCargoList) || looseCargoList.length < 1){
                    throw new Error('loose_cargo info is required.');
                }else if(!this.validateUnits(looseCargoList)){
                    console.log("loose cargo", looseCargoList)
                    throw new Error('loose_cargo_list, dim and weight units should match (CM-KG) or (IN-LB) info is required.');
                }
            }         

        }else{
            console.log("validating container list")

            if(!this.isNullOrEmpty(quote_object.containers_list)){
                const containerList = JSON.parse(quote_object.containers_list);
                if(!Array.isArray(containerList) || containerList.length < 1){
                    throw new Error('containers_list info is required.');
                }else if(!this.validateUnits(containerList)){
                    console.log("container cargo", containerList)

                    throw new Error('container_cargo_list, dim and weight units should match (CM-KG) or (IN-LB) info is required.');

                } 
            }          

        }

        console.log("validating delivery date")

        const deliveryDate = new Date(quote_object.delivery_date);
        const today = new Date();
      
        

        //validate delivery date
        if(this.isNullOrEmpty(quote_object.delivery_date)){
            throw new Error('delivery_date info is required.');
        }
        if (deliveryDate < today) {
            throw new Error("Delivery date cannot be earlier than today's date.");
        }

        console.log("validating cargo date")

        //validate cargo_ready_date
        const cargoDate = new Date(quote_object.cargo_ready_date);

          if(this.isNullOrEmpty(quote_object.cargo_ready_date)){
            throw new Error('cargo_ready_date info is required.');
        }
        if (cargoDate < today) {
            throw new Error("cargo ready date cannot be earlier than today's date.");
        }

        
        //validate pickup_address
        if(this.isNullOrEmpty(quote_object.pickup_address)){
            throw new Error('pickup_address info is required.');
        }
        //validate drop_off_address
        if(this.isNullOrEmpty(quote_object.drop_off_address)){
            throw new Error('drop_off_address info is required.');
        }

        //validate export declaration
        if(this.isNullOrEmpty(quote_object.export_declaration)){
            throw new Error('export_declaration info is required');
        }
        //validate is_customs_clearance
        if(!this.isNullOrEmpty(quote_object.is_customs_clearance) && quote_object.is_customs_clearance == "true"){
            if(this.isNullOrEmpty(quote_object.commercial_invoice))
            throw new Error('commercial_invoice info is required for customes_clearance quotes');
        }
        //validate export declaration
        if(this.isNullOrEmpty(quote_object.is_importer)){
            throw new Error('importer/exporter info is required');
        }
        if(!this.isNullOrEmpty(quote_object.ff_email)){
            if(!this.validateEmail(quote_object.ff_email)){
                throw new Error('forwarder email is invalid');
            }
        }
        const quoteId = this.generateUniqueId();
        console.log("quote_id generated : ", quoteId)

        //const validated_quote = {...quote_object}
        quote_object.quote_id = quoteId;
        quote_object.mode_of_transport = formattedMode; 
        quote_object.status = "created";
        quote_object.createdAt = new Date().toISOString(), // Set createdAt to current date and time
        quote_object.updatedAt = null
        quote_object.docType = 'quote';

        console.log("validated quote", quote_object);

        return quote_object;
    }
    async GetAllQuotes(ctx) {
        const allResults = [];
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            if (record.docType === 'quote') {

                const transList = await  this.transporterListByQuoteId(ctx,record.quote_id)
                record.transporters = transList;
                allResults.push(record);
            }
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }

   

    async GetQuoteById(ctx, id) {
        const assetJSON = await ctx.stub.getState(id); 
        if (!assetJSON || assetJSON.length === 0) {
            throw new Error(`The asset ${id} does not exist`);
        }
        console.log("asset", assetJSON)
        const record = JSON.parse(assetJSON);
        console.log("asset record", record)

        const transList = await  this.transporterListByQuoteId(ctx,assetJSON.quote_id)
        assetJSON.transporters = transList;

        return assetJSON.toString();
    }

    async GetAllTransporters(ctx) {
        const allResults = [];
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            if (record.docType === 'transporter') {
                allResults.push(record);
            }
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }
    validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      }

    validateUnits(packing_list) {
        for (const load of packing_list) { 
            if((load.dims_units === "cm" && load.weight_units === "kg") || (load.dims_units === "in" && load.weight_units === "lb") ){
            }else{
                return false
            }
        }
        return true 
      }


    //async Define_Transport_Path(ctx, source, destination, ff_email, mode) {
    async Define_Transport_Path(ctx, source, destination, ff_email, mode) {
        const quoteIDs = await this.getQuoteByFilter(ctx, source, destination, ff_email, mode);
        var transIds = []
        for(const quote of quoteIDs){
           const eachTransIds =  await this.transporterListByQuoteId(ctx, quote.quote_id)
           transIds = [...transIds, ...eachTransIds]
        }
        return transIds
    }


    async OFF_Quote_By_Mode(ctx, source, destination, ff_email, mode) {

        const allResults = [];
        const iterator = await ctx.stub.getStateByRange('','');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
            
                record = JSON.parse(strValue);

                const is_match = (record.source.trim().toLowerCase() === source.trim().toLowerCase() 
                && record.destination.trim().toLowerCase() === destination.trim().toLowerCase() 
                && record.forwarder_email.trim().toLowerCase() === ff_email.trim().toLowerCase() 
                && record.mode.trim().toLowerCase() === mode.trim().toLowerCase());

                console.log("is_match: ", is_match)

                if (is_match){                
                    allResults.push(record);
                }

                } catch (err) {
                    console.log(err);
                    record = strValue;
                }
                
                result = await iterator.next();
            }
        return allResults;
      }


    // Filter quotes based on source, destination, ff email and mode of transport
    async getQuoteByFilter(ctx, source, destination, ff_email, mode ){

        console.log("getting quotes based on ", source, destination, ff_email,mode)

        const allResults = [];
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
            record = JSON.parse(strValue);

            

            if(!this.isNullOrEmpty(record) && record != {}){

                 // Perform the console log and condition check
                console.log('Input source:', source.trim().toLowerCase());
                console.log('Table source city:', record.source_city.trim().toLowerCase());
                console.log('Input destination:', destination.trim().toLowerCase());
                console.log('Table destination city:', record.destination_city.trim().toLowerCase());
                console.log('Input mode:', mode.trim().toLowerCase());
                console.log('Table mode of transport:', record.mode_of_transport.trim().toLowerCase());
                console.log('Input ff email:', ff_email.trim().toLowerCase());
                console.log('Table ff email:', record.ff_email.trim().toLowerCase());
    
                console.log("Source match: ", source.trim().toLowerCase() === record.source_city.trim().toLowerCase());
                console.log("Destination match: ", destination.trim().toLowerCase() === record.destination_city.trim().toLowerCase());
                console.log("FF_email match: ", ff_email.trim().toLowerCase() === record.ff_email.trim().toLowerCase());
                console.log("Mode match: ", mode.trim().toLowerCase() === record.mode_of_transport.trim().toLowerCase());


                var is_match = true;
                if(!this.isNullOrEmpty(record.source_city) && !this.isNullOrEmpty(source)){
                    is_match = is_match && record.source_city.trim().toLowerCase() === source.trim().toLowerCase()
                }

                if(!this.isNullOrEmpty(record.destination_city) && !this.isNullOrEmpty(destination)){
                    is_match = is_match && record.destination_city.trim().toLowerCase() === destination.trim().toLowerCase() 

                }


                if(!this.isNullOrEmpty(record.mode_of_transport) && !this.isNullOrEmpty(mode)){
                    is_match = is_match && record.mode_of_transport.trim().toLowerCase() === mode.trim().toLowerCase();
                }

                if(!this.isNullOrEmpty(ff_email)){
                    is_match = is_match && record.ff_email.trim().toLowerCase() === ff_email.trim().toLowerCase() 
                }

                if (is_match){                
                    allResults.push(record);
                }
           }

            } catch (err) {
                console.log(err);
                record = strValue;
            }
            
            result = await iterator.next();
        }
        return allResults;                 
    }

    // Filter Transporter asset based on quote_id
    async transporterListByQuoteId(ctx, quote_id){
        const allResults = [];
        
        console.log("getting transporters by quote id", quote_id)

        if(this.isNullOrEmpty(quote_id)){
            return allResults;
        }
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
            
            record = JSON.parse(strValue);
            if(!this.isNullOrEmpty(record) && record != {}){
                const is_match = (record.quoteId.trim() === quote_id.trim());

                if (is_match){                
                    allResults.push(record);
                }
            }
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            
            result = await iterator.next();
        }    
        return allResults;
    }
        
    // const quote = {
    //     quote_id : "",
    //     mode_of_transport : "", //(air, ocean, ground) 

    //     is_loose_cargo : "", // true , if false then go with containers 
    //     loose_cargo_list :"", //array of loose_cargo objects
    //     containers_list : "", //array of containers object
        
    //     //packing_list : "",  //no need to add this field
        
    //     cargo_ready_date : "",
    //     delivery_date: "", //required
    //     pickup_address : "",
    //     drop_off_address : "",
    //     inco_terms : "",  //(optoinal, helpful, explanation here (also a competitor))
    //     export_declaration: "",  //required
    //     is_customs_clearance: "",  //required (if yes, then commercial invoice required)
    //     commercial_invoice : "", // required only when customs_clearance is required 
    //     special_instructions : "",
    //     is_importer : "", // (y/n) - if n then consider as exporter,
    // };

    // const loose_cargo = {
    //     dims : "",
    //     dims_units : "",
    //     weight : "",
    //     weight_units : "",
    //     no_of_units : "",
    //     is_dg  : "",//(asks for SDS, if not available give option UN#, class# and HS# (required))
    //     dg_info : {"sds" : "", "UN#" : "" ,"class#" : "", "HS#": ""},
    //     is_tc: "",  //y/n (if yes, need specifics) stackable y/n)
    //     tc_info : "", //tc specifications
    //     stackable : "",//(y/n)
        
    // }
    // const containers = {
    //     no_of_units : "",
    //     container_type : "", //20,40,60
    //     is_dg  : "",//(asks for SDS, if not available give option UN#, class# and HS# (required))
    //     dg_info : {"sds" : "", "UN#" : "" ,"class#" : "", "HS#": ""},
    //     is_tc: "",  //y/n (if yes, need specifics) stackable y/n)
    //     tc_info : "", //tc specifications
    //     stackable : "",//(y/n)
    // }

    // const transporters  = {
    //     transporter_id : "",
    //     quote_id : "",
    //     mode : "", //enum - road, ocean , air
    //     source : "",
    //     destination : "",
    //     per_unit_charge : " "//( weight/dims/distance
    // }

    // const customs_quote = {
    //     customs_id : "",
    //     quote_id : "",
    //     material_type : "",
    //     per_unit_charge : "",
    //     country : ""
    // }
    

   
  
}

module.exports = AssetTransfer;
