import Image from "next/image"

export default function ReviewBox({reviewText, reviewPhoto, reviewName, reviewDate, reviewRate}) {
    return(
        <figure className="bg-white shadow-lg p-8 mb-9 relative overflow-hidden">
        <blockquote className="mb-5 z-10 relative">
            {reviewText}
        </blockquote>
        <figcaption className="flex items-center">
            <Image src={reviewPhoto} alt="User 1" width={200} height={200} className="h-11 w-11 rounded-full mr-4" />
            <div className="mr-auto">
                <p className="text-xs uppercase font-semibold mb-[4px]">{reviewName}</p>
                <p className="text-[10px]">{reviewDate}</p>
            </div>
            <div className="text-xl font-light text-pink-600">{reviewRate}</div>
        </figcaption>
    </figure>
    )
}