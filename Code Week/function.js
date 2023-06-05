export const qS = (el) => document.querySelector(el);
export const cE = (ele) => document.createElement(ele);
export const qA = (el) => document.querySelectorAll(el)


export const createContactsList = (obj) => {
    let contactsWrapper = cE("div");
    contactsWrapper.className = "contacts_wrapper";


    let contactList = cE("div");
    contactList.className = "contact_list";
    

    let iconContact = cE("div");
    iconContact.className = "icon_contact";
        let icon = cE("i");
        icon.className = "bx bx-user-circle icon";

    let infoContact = cE("div");
    infoContact.className = "info_contact";
        let contactName = cE("h3");
        contactName.className = "contact_name";
        contactName.textContent = obj.name;
        let contactPhone = cE("p");
        contactPhone.className = "contact_telnumber";
        contactPhone.textContent = obj.phone;

    iconContact.append(icon);
    infoContact.append(contactName, contactPhone);

    contactList.append(iconContact, infoContact);

    contactsWrapper.append(contactList);

    return contactsWrapper;
}