import { ref } from 'vue'

interface GeneralData {
    id: string;
    email: string;
    log: string;
    type: 'Regular Bot' | 'Armed Seeker' | 'Triple Changer' | '';
    faction: 'Select' | 'Autobot' | 'Decepticon' | 'Mercenary' | 'Civilian'
}

interface NotifsData {
    symlink: boolean;
    nreceptors: boolean;
    cog: boolean
}

interface PrivacyData {
    SearchEngineIndexing: boolean,
    visibility : 'Private' | 'Public'
}

const general = ref<GeneralData>({
    id: '',
    email: '',
    log: '',
    type: '',
    faction: 'Select'

})

const notifs = ref<NotifsData>({
    symlink: true,
    nreceptors: false,
    cog: false
})

const privacy = ref<PrivacyData>({
    SearchEngineIndexing: false,
    visibility : 'Private'
})

export default  function tabsData() {
    return {
        general,
        notifs,
        privacy
    }
}