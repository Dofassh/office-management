'use strict';

describe('meetingRoom', function() {

    var room;

    beforeEach(function() {
        room = new Room();
    });


    it('checks to see if the meeting room is available', function() {
        expect(room.available).toBe(true);
    });

    it('sets meeting room to unavailable once entered', function() {
        room.entered();
        expect(room.available).toBe(false);
    });

    it('sets meeting room to available once exited', function() {
        room.entered();
        room.exited();
        expect(room.available).toBe(true);
    });

    it('throws an error if someone tries to enter a room that is occupied', function() {
        room.entered();
        room.occupied();
        room.entered();
        expect(room.entered()).toThrow();
    });

    it('assigns names to each meeting room to avoid confusion', function() {
        room.getId();
        expect(room.getId()).toEqual('Slytherin')
    });

});