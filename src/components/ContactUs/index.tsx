"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { Input } from "../Ui/input"
import { Textarea } from "../Ui/textarea"

export default function ContactUsComponent() {
    const formRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-field", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            })
        }, formRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 px-4 py-12">
            <div
                ref={formRef}
                className="max-w-2xl w-full bg-white shadow-2xl rounded-2xl p-8 space-y-6"
            >
                <h2 className="text-3xl font-bold text-slate-800 text-center contact-field">Contact Us</h2>
                <p className="text-center text-slate-600 text-sm contact-field">We'd love to hear from you — fill out the form below!</p>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 contact-field">
                        <Input type="text" placeholder="First Name" className="h-12" />
                        <Input type="text" placeholder="Last Name" className="h-12" />
                    </div>
                    <Input type="email" placeholder="Email Address" className="h-12 contact-field" />
                    <Input type="text" placeholder="Subject" className="h-12 contact-field" />
                    <Textarea placeholder="Your Message..." rows={5} className="resize-none contact-field" />

                    <Button type="submit" className="w-full h-12 text-lg contact-field">
                        Send Message
                    </Button>
                </form>

                <div className="text-center text-xs text-slate-500 contact-field">We'll get back to you within 24 hours.</div>
            </div>
        </div>
    )
}
