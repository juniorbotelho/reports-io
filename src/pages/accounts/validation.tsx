import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Validation: React.FC = () => {
  const [data, setData] = useState({ email: "", username: "" })

  const router = useRouter()
  const { info: encodedBase64 } = router.query

  useEffect(() => {
    if (encodedBase64) {
      const decodedBase64 = Buffer.from(
        String(encodedBase64),
        "base64"
      ).toString()

      // Defined data
      setData(JSON.parse(decodedBase64))
    }
  }, [encodedBase64])

  return (
    <div>
      email: {data.email}, username: {data.username}
    </div>
  )
}

export default Validation
