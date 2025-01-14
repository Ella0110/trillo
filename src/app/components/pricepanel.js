export default function PricePanel({hotel, checkIn, checkOut}) {
  const stayDays = (new Date(checkOut) - new Date(checkIn))/86400000
  let CurrentPrice = hotel.bookings[0].price
  let totalPrice = CurrentPrice * stayDays + 200 - 300
  return (
    <>
    <div className="grid grid-cols-2 gap-1">
        <div className="underline">{CurrentPrice} * {stayDays} nights</div>
        <div className="justify-self-end">${CurrentPrice * stayDays}</div>
        <div className="underline">Long stay discount</div>
        <div className="justify-self-end text-pink-500">-$300</div>
        <div className="underline">Cleaning fee</div>
        <div className="justify-self-end">$200</div>
        <div className="underline">Service fee</div>
        <div className="justify-self-end">$0</div>
      </div>
      <div className="flex justify-between border-t-[1px] py-3 ">
        <div>Total before taxes</div>
        <div>${totalPrice}</div>
      </div>
      </>
  )
}