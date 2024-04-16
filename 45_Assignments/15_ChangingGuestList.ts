//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let dinnerGuests: string[] = ["Kashif", "Sir Abdul Kalam", "Neil Armstrong"];


dinnerGuests.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner. Please let me know if you can attend.\n`);
});

function GuestNotComming(removeName : string, addName : string){
    let i = 0;
    dinnerGuests.forEach(n =>{
        if (n==removeName) {
            dinnerGuests.splice(i,i+1, addName);

        }
        i++;
    });
}

GuestNotComming("Kashif", "Rashid");

console.log(dinnerGuests);

dinnerGuests.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner. Please let me know if you can attend.\n`);
});
