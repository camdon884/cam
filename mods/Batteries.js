
elements.charged_battery= {
    color: "#9c6c25",
    behavior: [
        "XX|SH%50|XX", // shocks (adds charge)
        "SH%50|CH:low_battery%0.05|SH%50",
        "XX|SH%50|XX",
    ],
    elements.bouncy= {
	    color: rbg( 255, 0 ,0),
	    behavior: [
            ["XX","M2","XX"],
            ["XX","XX","XX"],
            ["XX","M1","XX"]
		    ]
    }
