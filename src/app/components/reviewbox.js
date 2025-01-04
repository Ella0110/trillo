import Image from "next/image"

export default function ReviewBox({reviewText, reviewPhoto, reviewName, reviewDate, reviewRate}) {
    return(
        <figure className="flex gap-5 flex-col flex-none w-[15rem] bg-white shadow-lg p-5">
        <blockquote className="">
            {reviewText}
        </blockquote>
        <figcaption className="flex items-center">
            <Image src={reviewPhoto} alt="User 1" width={200} height={200} className="h-11 w-11 rounded-full mr-4" />
            <div className="mr-4">
                <p className="text-xs uppercase font-semibold mb-[4px]">{reviewName}</p>
                <p className="text-[10px]">{reviewDate}</p>
            </div>
            <div className="text-xl font-light text-pink-600">{reviewRate}</div>
        </figcaption>
    </figure>
    )
}