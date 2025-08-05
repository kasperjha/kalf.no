import { drawings } from "~/drawings"
import type { KalfSubmission } from "~/types/KalfSubmission"

/**
 * Use a kalf drawing.
 */
export function useDrawing() {
  const randomIndex = () => Math.floor(Math.random() * drawings.length)

  /**
   * A reactive reference to kalf drawing.
   */
  const drawing = ref<KalfSubmission | undefined>(undefined)

  /**
   * Switch to a random drawing.
   */
  const randomDrawing = () => drawing.value = drawings[randomIndex()] as KalfSubmission

  /**
   * Switch to a a specific drawing.
   * Determined by `credit.by` field.
   */
  const setDrawing = (by: string) => {
    const newDrawing = drawings.find((entry) => entry.credit?.by === by)
    if(newDrawing === undefined) {
      throw new Error(`Drawing with creator "${by}" not found`)
    }
    drawing.value = newDrawing;
  }

  return {drawing, randomDrawing, setDrawing}
}


