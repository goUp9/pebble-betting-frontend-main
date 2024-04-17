import moment from "moment/moment";

export function shortenAddress(address, chars = 4) {
    const start = address.substring(0, chars);
    const end = address.substring(address.length - chars);
    return `${start}...${end}`;
}

export function formatDateToTimeAgo(timestamp) {
    const timeago = moment(timestamp).fromNow();
    return timeago;
  }