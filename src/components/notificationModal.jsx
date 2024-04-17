import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export default function NotificationDialog({open, setOpen, title, body}) {
    // console.log("open NotificationDialog");
    // console.log(open);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} handler={handleOpen} size="xs">
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            {title}
          </Typography>
        </DialogHeader>

        <DialogBody divider className="grid place-items-center gap-4">
          <Typography className="text-center font-normal text-black text-base">{body}</Typography>
        </DialogBody>

        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
