package com.tickets.app;

import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.FlightOfferSearch;
import com.amadeus.resources.FlightPrice;
import com.amadeus.resources.Location;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
public class ApiController {

    @GetMapping("/locations")
    public Location[] locations(@RequestParam(required = true) String keyword) throws ResponseException {
        return AmadeusConnect.INSTANCE.locations(keyword);
    }

    @GetMapping("/flights")
    public FlightOfferSearch[] flights(@RequestParam(required = true) String origin,
                                       @RequestParam(required = true) String destination,
                                       @RequestParam(required = true) String departDate,
                                       @RequestParam(required = true) String adults,
                                       @RequestParam(required = false) String returnDate,
                                       @RequestParam(required = false) Integer maxPrice)
            throws ResponseException {
        return AmadeusConnect.INSTANCE.flights(origin, destination, departDate, adults, returnDate, maxPrice);
    }
        @PostMapping("/confirm")
    public FlightPrice confirm(@RequestBody(required = true) FlightOfferSearch search) throws ResponseException {
        return AmadeusConnect.INSTANCE.confirm(search);
    }
}
