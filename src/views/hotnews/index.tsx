import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function HotNews() {
  return (
    <>
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
          position: "top-center",
        })
      }
    >
      Show Toast
    </Button>

    <button onClick={() => toast.success("Hello", { position: "top-center" })}>
      Show Toast
    </button>
    </>
  );
}
