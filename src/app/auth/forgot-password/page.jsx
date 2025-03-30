"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { resetPassword } from "@/lib/auth"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.target)
    const email = formData.get("email")

    try {
      await resetPassword(email)
      setEmailSent(true)
    } catch (error) {
      console.error("Password reset failed:", error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">PAISA - CONTROLLER</CardTitle>
          <CardDescription className="text-center">
            {emailSent ? "Reset link sent!" : "Reset your password"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-4 bg-destructive/10 text-destructive rounded-md">
              {error}
            </div>
          )}
          {emailSent ? (
            <div className="space-y-4 text-center">
              <p>We've sent a password reset link to your email address.</p>
              <p>Please check your inbox and follow the instructions.</p>
              <Button asChild className="w-full mt-4">
                <Link href="/auth">Return to login</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
              <div className="text-center text-sm mt-4">
                <Link href="/auth" className="text-primary hover:underline">
                  Back to login
                </Link>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}