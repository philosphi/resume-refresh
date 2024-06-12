const createUrl = (path: string) => {
  return window.location.origin + path;
}

export const createNewResume = async () => {
  const response = await fetch(new Request(createUrl('/api/resume')), {
    method: 'POST',
  })

  if (response.ok) {
    const data = await response.json()
    return data.data
  }
}