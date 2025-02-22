import { ref, watch } from 'vue'

interface GeneralData {
    id: string;
    email: string;
    log: string;
    type: 'rbot' | 'aseeker' | 'tchanger' | '';
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

const general = ref<GeneralData>(
    (() => {
        const stored = localStorage.getItem('general');

        return stored !== null
        ? JSON.parse(stored)
        : {
            id: '',
            email: '',
            log: 'Resident of Iacon',
            type: 'rbot',
            faction: 'Civilian'
            };
    })()
)

watch(general, (value) => {
    localStorage.setItem('general', JSON.stringify(value))
}, {deep: true})

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