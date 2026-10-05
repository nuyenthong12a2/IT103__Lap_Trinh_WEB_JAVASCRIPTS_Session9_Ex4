

const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomPrice: 1500000,
  "check-in": "2024-08-15",
  "guest note": "Phòng tầng cao",
  123: "Mã nội bộ"
};


console.log("--- TRƯỜNG HỢP 1: BIẾN ĐỘNG ---");
const priceKey = "roomPrice";


console.log("Dot Notation (sai):", bookingReservation.priceKey);


console.log("Bracket Notation (đúng):", bookingReservation[priceKey]);


console.log("Dot Notation (tĩnh, đúng):", bookingReservation.roomPrice);


console.log("\n--- TRƯỜNG HỢP 2: KEY ĐẶC BIỆT ---");


console.log("check-in:", bookingReservation["check-in"]);
console.log("guest note:", bookingReservation["guest note"]);
console.log("123:", bookingReservation["123"]);

console.log("\n--- TRƯỜNG HỢP 3: for...in ---");


for (const key in bookingReservation) {
  console.log(key + " (sai): " + bookingReservation.key);
}

// ĐÚNG: bookingReservation[key] đọc giá trị biến key ở mỗi vòng lặp
for (const key in bookingReservation) {
  console.log(key + " (đúng): " + bookingReservation[key]);
}