let UUID = 0

export default function useUniqueId () {
  const getID = () => {
    UUID++
    return String(UUID)
  }

  return {
    getID
  }
}
