import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from "@/lib/dbConnect"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        // connect and look up user
        const users = await dbConnect("userCollection")
        const user = await users.findOne({ email: credentials.email })
        if (!user) return null

        // plain-text comparison
        if (credentials.password !== user.password) return null

        // return a safe user object with role
        return {
          id: user._id.toString(),
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          image: user.imageUrl || null,
          role: user.role
        }
      }
    })
  ],

  session: {
    strategy: "jwt"
  },

  callbacks: {
    // Include role in the JWT
    async jwt({ token, user }) {
      if (user && user.role) {
        token.role = user.role
      }
      return token
    },
    // Include role (and id) in the session object
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub
        session.user.role = token.role
      }
      return session
    }
  },

  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }