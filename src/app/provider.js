// app/providers.js
'use client'

import React from 'react'
import { Amplify } from 'aws-amplify'
import awsmobile from '../../aws-exports'

Amplify.configure(awsmobile)

export default function Providers({ children }) {
  return <>{children}</>
}
