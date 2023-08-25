interface UTMParams {
  [key: string]: string | null
}

export default function useUtm() {
  const utmParams: Ref<UTMParams> = ref({})

  const saveUtmParamsToSessionStorage = (): void => {
    for (const key in utmParams.value) {
      if (utmParams.value[key]) {
        sessionStorage.setItem(key, utmParams.value[key] as string)
      }
    }
  }

  const loadUtmParamsFromSessionStorage = (): void => {
    const keys: string[] = Object.keys(sessionStorage)

    keys.forEach((key) => {
      if (key.startsWith('utm_') && sessionStorage.getItem(key)) {
        utmParams.value[key] = sessionStorage.getItem(key)
      }
    })
  }

  const clearUtmParamsFromSessionStorage = (): void => {
    for (const key in utmParams.value) {
      if (utmParams.value[key]) {
        sessionStorage.removeItem(key)
      }
    }
  }

  const extractUtmParams = (): void => {
    const urlParams: URLSearchParams = new URLSearchParams(
      window.location.search
    )

    for (const param of urlParams) {
      if (param[0].startsWith('utm_') && param[1]) {
        utmParams.value[param[0]] = param[1]
      }
    }

    saveUtmParamsToSessionStorage()
  }

  onMounted(() => {
    if (window.location.search) {
      extractUtmParams()
    }
    loadUtmParamsFromSessionStorage()
  })

  return {
    utmParams,
    clearUtmParamsFromSessionStorage,
  }
}
