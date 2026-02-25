export default function PricingPolicy() {
    return (
        <main className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">

                <div className="mb-12 border-b pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0B2046] mb-4">Pricing Policy</h1>
                    <div className="flex gap-6 text-sm text-slate-500 font-medium">
                        <p>Effective Date: August 4, 2025</p>
                        <p>Last Updated: August 4, 2025</p>
                    </div>
                </div>

                <div className="prose prose-slate max-w-none text-slate-700 space-y-8">

                    <p className="text-lg text-slate-600 mb-8">
                        At Tirwin Talent, we believe in transparent and fair pricing.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0B2046] mb-4">1. Pricing Structure</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong className="text-slate-900">Free Webinars:</strong> No charge unless stated.</li>
                            <li><strong className="text-slate-900">Paid Webinars:</strong> Prices vary and are listed on registration pages.</li>
                            <li><strong className="text-slate-900">Subscription Plans:</strong> Monthly or yearly plans may be available.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0B2046] mb-4">2. Currency</h2>
                        <p>
                            All prices are listed in Indian Rupees (INR) unless specified otherwise.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0B2046] mb-4">3. Payment Methods</h2>
                        <p>
                            Credit/Debit Cards, UPI/Net Banking, Wallets (e.g., Razorpay, Stripe).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0B2046] mb-4">4. Invoicing</h2>
                        <p>
                            Invoice emailed automatically upon successful payment. Contact for bulk/institutional invoicing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0B2046] mb-4">5. Refund and Cancellation</h2>
                        <div className="space-y-4 ml-4">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">User Cancellation:</h3>
                                <p>Contact tirwin.communications@tirwin.in for assistance. Refunds processed within 7 working days.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">Host Cancellation:</h3>
                                <p>Full refund or alternate date provided.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0B2046] mb-4">6. Service Fees</h2>
                        <p>
                            Any applicable convenience or processing fees will be displayed before final payment.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0B2046] mb-4">7. Dispute Resolution</h2>
                        <p>
                            Contact tirwin.communications@tirwin.in within 7 days of the transaction for disputes.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
