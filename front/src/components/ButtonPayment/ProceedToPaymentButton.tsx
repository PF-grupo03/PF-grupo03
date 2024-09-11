import React, { useContext } from "react";
import BookingContext from "@/context/BookingContext";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

const ProceedToPaymentButton = () => {
	const router = useRouter();
	const bookingContext = useContext(BookingContext);
	const userContext = useContext(UserContext);

	const validateParticipants = () => {
		if (!bookingContext) return false;
		for (const participant of bookingContext.participants) {
			if (
				!participant.name ||
				!participant.email ||
				!participant.cellphone ||
				!participant.dni
			) {
				return false;
			}
		}
		return true;
	};

	const handleProceedToPayment = () => {
		if (!userContext.isLogged) {
			alert("Please log in to proceed with the payment.");
			router.push("/login");
			return;
		}

		if (validateParticipants()) {
			bookingContext.sendBookingData();
			console.log("data sent:" + bookingContext);
		} else {
			alert(
				"Por favor, completa todos los campos antes de proceder con el pago."
			);
		}
	};

	return (
		<button
			type="button"
			onClick={handleProceedToPayment}
			className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
		>
			Proceed to Payment
		</button>
	);
};

export default ProceedToPaymentButton;
