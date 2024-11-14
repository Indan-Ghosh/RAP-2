sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ig/tappr/travelapproverapp/test/integration/FirstJourney',
		'com/ig/tappr/travelapproverapp/test/integration/pages/TravelList',
		'com/ig/tappr/travelapproverapp/test/integration/pages/TravelObjectPage',
		'com/ig/tappr/travelapproverapp/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ig/tappr/travelapproverapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);