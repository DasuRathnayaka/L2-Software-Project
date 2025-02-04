$("#nft_minting_form").validate({
    rules: {
        owner_name: {
            required: true,
            pattern: /^[a-zA-Z]+ [a-zA-Z]+$/,
        },
        owner_address: {
            required: true,
            pattern: /^0x[a-fA-F0-9]{40}$/i,
        },
        owner_nic: {
            required: true,
            pattern: /(^\d{9}V$|^\d{12}$)/i,
        },
        color: {
            required: true,
        },
        company: {  
            required: true,
        },
        vehicle_model: {
            required: true,
        },
        price: {
            required: true,
        },
        wheel_base: {
            required: true,
        },
        engine_no: {
            required: true,
        },
        chassis_no: {
            required: true,
        },
        internal_height: {
            required: true,
        },
        cylinder_capacity: {
            required: true,
        },
        manufactured_date: {
            required: true,
            date: true,
        },
        registered_date: {
            required: true,
            date: true,
        },
        body_type: {
            required: true,
        },
        seating_capacity: {
            required: true,
        },
        fuel_type: {
            required: true,
        },
        vehicle_type: {
            required: true,
        },
        description: {  
            required: true,
        },
        thumbnail: {
            required: true,
        },
        attachments: {
            required: true,
        },
    

    },messages: {
        owner_name: {
            required: "Please enter your name",
        },
        owner_address: {
            required: "Please enter your address",
            pattern: "Please enter a valid address",
        },
        owner_nic: {
            required: "Please enter your NIC",
            pattern: "Please enter a valid NIC",
        },
        color: {
            required: "Please enter color",
        },
        company: {  
            required: "Please enter company",
        },
        vehicle_model: {
            required: "Please enter vehicle model number",
        },
        price: {
            required: "Please enter price",
        },
        wheel_base: {
            required: "Please enter wheel base",
        },
        engine_no: {
            required: "Please enter engine number",
        },
        chassis_no: {
            required: "Please enter chassis number",
        },
        internal_height: {
            required: "Please enter internal height",
        },
        cylinder_capacity: {
            required: "Please enter cylinder capacity",
        },
        manufactured_date: {
            required: " Please enter manufactured date",
            date:   "Please enter a valid date",
        },
        registered_date: {
            required:   "Please enter registered date",
            date:  "Please enter a valid date",
        },
        body_type: {
            required: "Please enter body type",
        },
        seating_capacity: {
            required:   "Please enter seating capacity",
        },
        fuel_type: {
            required:   "Please enter fuel type",
        },
        vehicle_type: {
            required:  "Please enter vehicle type",
        },
        description: {  
            required:   "Please enter description",
        },
        thumbnail: {
            required:   "Please enter thumbnail",
        },
        attachments: {
            required:    "Please enter attachments",
        },

    },

    
        
});

$.validator.addMethod("pattern", function( value, element, param ) {
    debugger;
	if ( this.optional( element ) ) {
		return true;
	}
	if ( typeof param === "string" ) {
		param = new RegExp( "^(?:" + param + ")$" );
	}
	return param.test( value );
}, "Invalid format." );
